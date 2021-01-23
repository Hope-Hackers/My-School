<template>
  <div>
    <div>
      <h6>Select a Class :</h6>
      <b-form-select
        v-model="selected"
        :options="options"
        size="sm"
        class="mt-3"
      ></b-form-select>
      <div class="mt-3">
        Selected: <strong>{{ selected }}</strong>
      </div>
    </div>
    <div>
      <v-row class="d-flex justify-center ma-6">
        <ClassSchedule />
      </v-row>
      <v-row class="d-flex justify-center ma-6">
        <ClassStudents />
      </v-row>
    </div>
  </div>
</template>

<script>
import ClassSchedule from "../class/ClassSchedule";
import ClassStudents from "../class/ClassStudents";
export default {
  name: "TeacherClass",
  components: {
    ClassSchedule,
    ClassStudents,
  },
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Please select a Class" },
        { value: "a", text: "1st A" },
        { value: "b", text: "5th B" },
        { value: { C: "3PO" }, text: "6th B" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
