<template>
  <div class="container">
    <v-container class="grey lighten-5">
       <v-row no-gutters>
          <v-col>
            <v-select
              :items="fieldss"
              v-model="classSelected"
              @change="fetchData"
              label="Select a class"
              dense
              solo
            ></v-select>
          </v-col>
          <v-divider class="mx-5" inset vertical></v-divider>
          <v-col v-if="classSelected">
            <v-select
              :items="items"
              v-model="studentSelected"
              @change="fetchStudent"
              label="Select a student"
              dense
              solo
            ></v-select>
          </v-col>
    </v-row>
      <v-row v-if="done" class="justify-center">
        <v-col>
          <v-card class="pa-6 ma-auto">
            <h5 >
              {{ student.name }} Grades :
            </h5>
            <v-divider></v-divider>
            <v-simple-table fixed-header height="300px">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      <h6 class="font-weight-bold teal--text">Fields</h6>
                    </th>
                    <th class="text-left">
                      <h6 class="font-weight-bold teal--text">Grades</h6>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in fields" :key="item.field">
                    <td>{{ item.field }}</td>
                    <td>{{ item.grade }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="mx-auto pa-2"
            max-width="344"
          >
            <v-img :src="student.image" height="200px"></v-img>

            <v-card-title>
              {{ student.name }}
            </v-card-title>

            <v-card-subtitle>
              <h6><b>Class : </b> {{ student.class }}</h6>
              <v-spacer></v-spacer>
              <h6><b>Student Id : </b>{{ student.studentId }}</h6>
            </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange lighten-2" text>
                Explore
              </v-btn>

              <v-spacer></v-spacer>
              <v-btn icon @click="showDescription">
                <v-icon>{{
                  visible ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-if="visible">
                <v-divider></v-divider>
                <v-card-text>
                  {{ student.description }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="done" class="grey lighten-5">
      <v-row  class="justify-center">
         <b-table hover :items="schedules"></b-table>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "StudentGrades",
  data() {
    return {
       classSelected: null,
      studentSelected:null,
      items: [],
      fieldss:['1st A', '5th B', '6th A'],
      fields: [],
      dynamicList: [],
      students: [],
      schedules:[],
      student:null,
      done:false,
      visible:false
    };
  },
  methods: {
    showDescription(){
      console.log(this.visible)
      this.visible = !this.visible
    },
    async fetchData() {
      var students = await axios.post("http://localhost:7000/api/classStudents/filterstudent",{class:this.classSelected})
      for(var i = 0; i < students.data.classStudents.length; i++) {
        this.items.push(students.data.classStudents[i].name)
      }
    },
    async fetchStudent(){
      var classStudent = await axios.post("http://localhost:7000/api/classStudents/filterstudent",{name:this.studentSelected})
      this.student=classStudent.data.classStudents[0]
      
      var classSchedule = await axios.post("http://localhost:7000/api/classSchedule/filter",{class:this.classSelected})
      this.schedules=classSchedule.data.classSchedule
      
      var grades = await axios.post("http://localhost:7000/api/grades/filter",{name:classStudent.data.classStudents.name})
      var item = grades.data;
      delete item._id && delete item.name && delete item.__v;
      for (var key in item) {
        this.fields.push({
          field: key,
          grade: item[key],
        });
      }
      this.done = true
    },
  },
};
</script>

<style lang="scss" scoped></style>
