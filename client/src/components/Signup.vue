<template>

    <div>
    <v-container>
        <v-card >
          
        <v-form class="pa-6 ma-10">
            <v-text-field  v-model="signup.firstName" label="First Name" />
            <v-text-field  v-model="signup.lastName" label="Last Name" />
            <v-text-field  v-model="signup.email" label="Email" />
            <v-text-field  v-model="signup.childId" label="Your Child ID" />
            <v-text-field  v-model="signup.password" label="Password" 
                        :type="showPassword ? 'text' : 'password'"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPassword = !showPassword"/>
            <!-- <v-text-field  v-model="signup.password" label="Confirm Password" 
                        :type="showPassword ? 'text' : 'password'"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPassword = !showPassword"/> -->

            <v-btn v-on:click="signUp()">Sign up</v-btn>
        </v-form>
        
        </v-card>
    </v-container>
  </div>

</template>

<script>
    import axios from "axios";
    export default {
        name: 'Signup',
        data: () => ({
            showPassword: true,
            signup: {
            firstName: "",
            lastName: "",
            email: "",
            childId: "",
            password: ""
            },
        }),
        methods: {
            signUp() {
            axios.post("http://localhost:3000/api/users/createUser", this.signup)
                .then((response) => console.log(response))
            },
        },
        props: {
            source: String,
        }
    }
</script>

<style lang="scss" scoped>

</style>