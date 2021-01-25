<template>

    <div>
    <!-- <v-container>
        <h5>Add a new Student :</h5> 
        <v-card >
            <v-form class="pa-6 ma-10">
                <v-text-field  v-model="student.image" label="Image URL" />
                <v-text-field  v-model="student.name" label="Full Name" />
                <v-text-field  v-model="student.class" label="Class" />
                <v-text-field  v-model="student.description" label="Description" />
                <v-btn v-on:click="addStudent()">Add Student</v-btn>
            </v-form>        
        </v-card>
       
        
    </v-container> -->
    <v-container>
         
            <v-card>           
                <StudentsTable/>
            </v-card>
        
    </v-container>    
    <v-container>
                   
            <ClassStudents/>
        
    </v-container>              
  </div>

</template>

<script>
    import axios from "axios";
    import ClassStudents from "../class/ClassStudents"
    import StudentsTable from "./StudentsTable"
    export default {
        name: 'StudentsList',
        components: {
            ClassStudents,
            StudentsTable
        },
        data: () => ({
            showPassword: true,
            student: {
            image: "",
            name: "",
            class: "",
            description: ""
            },
        }),
        methods: {
            async addStudent() {
            var newStudent = await axios.post("http://localhost:3000/api/classstudents/create", this.student)
                console.log(newStudent)
                await this.clear()
            },
            clear () {
                this.student.image = ''
                this.student.name = ''
                this.student.class = ''
                this.student.description = ''
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>