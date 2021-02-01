<template>
  <div>
    <v-container>
      <v-card>
        <StudentsTable />
      </v-card>
    </v-container>
    <v-container>
      <ClassStudents />
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import ClassStudents from "../class/ClassStudents";
import StudentsTable from "./StudentsTable";
export default {
  name: "StudentsList",
  components: {
    ClassStudents,
    StudentsTable,
  },
  data: () => ({
    showPassword: true,
    student: {
      image: "",
      name: "",
      class: "",
      description: "",
    },
  }),
  methods: {
    async addStudent() {
      var newStudent = await axios.post(
        "http://localhost:7000/api/classstudents/create",
        this.student
      );
      console.log(newStudent);
      await this.clear();
    },
    clear() {
      this.student.image = "";
      this.student.name = "";
      this.student.class = "";
      this.student.description = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
