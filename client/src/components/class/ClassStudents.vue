<template>
  <div class="container">
    <h5>My Class Students :</h5>
    <br />
    <v-row>
      <v-card
        class="mx-auto ma-2 pa-2"
        max-width="344"
        v-for="(student, index) in dynamicList"
        :key="index"
      >
        <v-img :src="student.image" height="200px"></v-img>

        <v-card-title>
          {{ student.name }}
        </v-card-title>

        <v-card-subtitle>
          <h6>{{ student.class }}</h6>
        </v-card-subtitle>

        <v-card-actions>
          <v-btn color="orange lighten-2" text>
            Explore
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="student.visible = !student.visible">
            <v-icon>{{
              student.visible ? "mdi-chevron-up" : "mdi-chevron-down"
            }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="student.visible">
            <v-divider></v-divider>
            <v-card-text>
              {{ student.description }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ClassStudents",
  data: () => ({
    show: false,
    dynamicList: [],
    students: [],
  }),
  methods: {
    prepareDynamicList() {
      this.students.forEach((element) => {
        this.dynamicList.push({ ...element, visible: false });
      });
    },
  },
  //the data would be available when the component is created, so the created hook is where we will prepare our list for toggling.
  // async created(){
  //     await this.prepareDynamicList();
  // },
  async mounted() {
    var studentsList = await axios.get(
      "http://localhost:7000/api/classstudents"
    );
    this.students = studentsList.data;
    console.log(studentsList.data);
    this.prepareDynamicList();
    this.fetched = true;
  },
};
</script>

<style lang="scss" scoped></style>
