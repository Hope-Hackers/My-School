<template>
  <div class="container">
    
      
        <p class="admintext">All Contact here :</p>
        <ul v-for="item in contact" :key="item">
          <li>First Name : {{ item.name }}</li>
          <li>Last Name : {{ item.Lname }}</li>
          <li>Email : {{ item.email }}</li>
          <li>Message : {{ item.message }}</li>
          <hr /></ul>
    

   
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
