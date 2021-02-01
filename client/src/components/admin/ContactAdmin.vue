<template>
  <div class="container">
    <p class="admintext">All Contact here :</p>
    <div class="d-flex flex-column mb-6">
      <v-card class="pa-2" outlined tile v-for="item in contact" :key="item">
        <v-card-text>
          <h6><b>Sender : </b>{{ item.name }} {{ item.Lname }}</h6>
          <h6><b>Email : </b>{{ item.email }}</h6>         
          <div class="text--primary">
            <h6><b>Message : </b></h6>
            <p class="text--primary">{{ item.message }}</p>  
          </div>
        </v-card-text>
      </v-card>
    </div>  
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
<style>
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-top: 1px solid rgb(12 12 12);
}
.admintext {
  margin-bottom: 1rem;
  font-size: 35px;
  font-family: cursive;
}
</style>
