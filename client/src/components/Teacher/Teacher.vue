<template>
  <div class="container">
    <h1>Here is the Teacher component</h1>
    <br />

    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-avatar
            src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
            size="10rem"
          ></b-avatar>
        </b-col>
        <b-col md="6">
          <b-card-body title="Melek HOUIDI">
            <b-card-text>
              <h5>English Teacher</h5>
              Teaching English was my passion. Now, teaching English is my
              profession.
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <br /><br />
    <b-card no-body>
      <b-tabs v-model="tabIndex" small card>
        <b-tab title="Schedule">
          <TeacherSchedule />
        </b-tab>
        <b-tab title="Class">
          <TeacherClass />
        </b-tab>
        <b-tab title="Grades">
          <TeacherGrades />
        </b-tab>
        <b-tab title="Info">I'm the last tab</b-tab>
      </b-tabs>
    </b-card>

    <!-- Control buttons-->
    <div class="text-center">
      <b-button-group class="mt-2">
        <b-button size="sm" @click="tabIndex--">Previous</b-button>
        <b-button size="sm" @click="tabIndex++">Next</b-button>
      </b-button-group>

      <!-- <div class="text-muted">Current Tab: {{ tabIndex }}</div> -->
    </div>
  </div>
</template>

<script>
import TeacherGrades from "./TeacherGrades";
import TeacherSchedule from "./TeacherSchedule";
import TeacherClass from "./TeacherClass";
export default {
  name: "Teacher",
  components: {
    TeacherGrades,
    TeacherSchedule,
    TeacherClass,
  },
  data() {
    return {
      show: false,
      selected: null,
      options: [
        { value: null, text: "Please select a Class" },
        { value: "a", text: "1st A" },
        { value: "b", text: "5th B" },
        { value: { C: "3PO" }, text: "6th B" },
      ],
      tabIndex: 0,
    };
  },
  methods: {},
};
</script>

<style></style>
