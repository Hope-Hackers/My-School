<template>
  <div>
    <div>
      <h6>Select a Class :</h6>
      <b-form-select
        v-model="selected"
        :options="options"
        @change="fetchData"
        size="sm"
        class="mt-3"
      ></b-form-select>
    </div>
    <div>
      <v-row class="d-flex justify-center ma-6">
        <ClassScheduleTeacher
          :schedules="teacherSchedules"
          :selected="selected"
        />
      </v-row>
      <v-row class="d-flex justify-center ma-6">
        <ClassStudentsTeacher
          :students="teacherStudents"
          :selected="selected"
        />
      </v-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ClassScheduleTeacher from "../class/ClassScheduleTeacher";
import ClassStudentsTeacher from "../class/ClassStudentsTeacher";
export default {
  name: "TeacherClass",
  components: {
    ClassScheduleTeacher,
    ClassStudentsTeacher,
  },
  methods: {
    async fetchData() {
      var schedules = await axios.post(
        "http://localhost:7000/api/classSchedule/filter",
        { class: this.selected }
      );
      this.teacherSchedules = schedules.data.classSchedule;
      var students = await axios.post(
        "http://localhost:7000/api/classStudents/filterstudent",
        { class: this.selected }
      );
      console.log('students',students)
      this.teacherStudents = students.data.classStudents;
    },
  },
  data() {
    return {
      selected: null,
      teacherSchedules: [],
      teacherStudents: [],
      options: [
        { value: null, text: "Please select a Class" },
        { value: "1st A", text: "1st A" },
        { value: "5th B", text: "5th B" },
        { value: "6th B", text: "6th B" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
