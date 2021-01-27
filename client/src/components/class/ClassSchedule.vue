<template>
  <div class="container">
    <h5>{{ parent.class }} Schedule :</h5>
    <br />
    <div>
      <b-table hover :items="items"></b-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ClassSchedule",
  data() {
    return {
      fetched: false,
      items: [],
    };
  },
  async beforeMount() {
    var schedules = await axios.post(
      "http://localhost:7000/api/classSchedule/filter",
      { class: parent.class }
    );
    this.items = schedules.data.classSchedule;
  },
};
</script>

<style lang="scss" scoped></style>
