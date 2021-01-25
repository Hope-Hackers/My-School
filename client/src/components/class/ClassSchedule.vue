<template>
  <div class="container">
    <h5>My Class Schedule :</h5>
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
  components: {},
  data() {
    return {
      fetched: false,
      items: [],
    };
  },
  async mounted() {
    var schedule = await axios.get(
      "http://localhost:7000/api/classschedule/findwithoutid"
    );
    this.items = schedule.data;
    console.log(schedule.data);
    this.fetched = true;
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
