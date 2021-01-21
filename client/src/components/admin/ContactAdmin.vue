<template>
  <div class="container">
    <b-tabs content-class="mt-3" align="center">
      <b-tab title="Contact" active
        ><p>Contact here</p>
        <ul v-for="item in contact" :key="item">
          <li>{{ item.name }}</li>
          <li>{{ item.Lname }}</li>
          <li>{{ item.email }}</li>
          <li>{{ item.message }}</li>
        </ul></b-tab
      >
      <b-tab title="schedule"><p>schedule here</p></b-tab>
      <b-tab title="Event"><p>Event here</p></b-tab>
    </b-tabs>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    contact: [],
  }),
  async mounted() {
    console.log("Component mounted.");
    const data = await axios.get("http://localhost:7000/api/contact/ContactUs");
    if (data) {
      this.contact = data.data;

      console.log(data.data);
      console.log(data.data.name);
    }
  },
};
</script>
