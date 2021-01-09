<template>
  
  <div v-if='this.logged == false'>
    <v-container>
        <v-form>
            <v-text-field v-model="input.email" label="Email" />
            <v-text-field v-model="input.password" 
                        label="Password" 
                        :type="showPassword ? 'text' : 'password'"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPassword = !showPassword"/>

            <v-btn v-on:click="login()">Login</v-btn>
        </v-form>
    </v-container>
  </div>
  <div v-else><Home /></div>
  
</template>

<script>
import axios from "axios";
import Home from "./Home";
export default {
    name: "Login",
    data: () => ({
    showPassword: true,
    input: {
      email: "",
      password: "",
    },
    logged: false,
    usernamelogin: false,
  }),
  components: {
    Home,
  },
  methods: {
    login() {
      axios.get("http://localhost:3000/api/users/").then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          if (this.input.email == response.data[i].email) {
            this.usernamelogin = true;
            if (this.input.password == response.data[i].password) {
              this.logged = true;
              break;
            } else {
              alert("Wrong Password");
            }
          }
        }
        if (!this.usernamelogin) {
          alert("Wrong E-mail");
        }
      });
    }
  },
  props: {
    source: String,
  },
}
</script>