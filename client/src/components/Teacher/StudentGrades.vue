<template>
    <div>
        <v-container class="grey lighten-5">
            <v-row class="justify-center">
                
                <v-col>
                    <v-card class="pa-2">
                        <h5 v-for="(student, index) in dynamicList" :key="index">{{student.name}} Grades :</h5>
                        <v-divider></v-divider>
                        <v-simple-table fixed-header height="300px">
                            <template v-slot:default>
                            <thead>
                                <tr>
                                <th class="text-left">
                                    <h6 class="font-weight-bold teal--text">Fields</h6>
                                </th>
                                <th class="text-left">
                                    <h6 class="font-weight-bold teal--text">Grades</h6>
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                v-for="item in fields"
                                :key="item.field"
                                >
                                <td>{{ item.field }}</td>
                                <td>{{ item.grade }}</td>
                                </tr>
                            </tbody>
                            </template>
                        </v-simple-table>
                    </v-card>
                </v-col>
                <v-col>
                    
                        <v-card
                            class="mx-auto pa-2"
                            max-width="344"
                            v-for="(student, index) in dynamicList" :key="index" 
                        >
                            <v-img
                            :src="student.image"
                            height="200px"
                            ></v-img>

                            <v-card-title>
                                {{student.name}}
                            </v-card-title>

                            <v-card-subtitle>
                                <h6><b>Class : </b> {{student.class}}</h6>
                                <v-spacer></v-spacer>
                                <h6><b>Student Id : </b>{{student.studentId}}</h6>
                            </v-card-subtitle>

                            <v-card-actions>
                            <v-btn
                                color="orange lighten-2"
                                text
                            >
                                Explore
                            </v-btn>

                            <v-spacer></v-spacer>

                            <v-btn
                                icon
                                @click="student.visible = !student.visible"
                            >
                                <v-icon>{{ student.visible ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                            </v-btn>
                            </v-card-actions>

                            <v-expand-transition>
                                <div v-show="student.visible">
                                    <v-divider></v-divider>
                                    <v-card-text>
                                        {{student.description}}
                                    </v-card-text>
                                </div>
                            </v-expand-transition>
                        </v-card>
                    
                </v-col>
                
            </v-row>
        </v-container>
        <v-container class="grey lighten-5">
            <v-row class="justify-center">
                <ClassSchedule/>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import axios from "axios";
    import ClassSchedule from "../class/ClassSchedule"
    export default {
        name:'StudentGrades',
        components: {
            ClassSchedule
        },
        data () {
            return {
                fields: [
                    // {
                    //     field: 'Maths',
                    //     grade: 18,
                    // },
                    // {
                    //     field: 'Sciences',
                    //     grade: 18,
                    // },
                    // {
                    //     field: 'Physics',
                    //     grade: 18,
                    // },
                    // {
                    //     field: 'Moyenne',
                    //     grade: 18,
                    // }
                ],
                dynamicList: [],
                students: []
            }
        },
        methods: {
            prepareDynamicList(){
                this.students.forEach(element => {
                this.dynamicList.push({...element, visible: false});
                });
            }
        },
        async mounted () {
            var studentsList = await axios.get('http://localhost:3000/api/classstudents')
            this.students = studentsList.data.splice(0,1)
            console.log (studentsList.data);
            this.prepareDynamicList();
            this.fetched = true;
            var grade = await axios.get('http://localhost:3000/api/grades')
            var item = grade.data.splice(0,1)[0]
            delete item._id && delete item.name && delete item.__v
            for (var key in item){
                this.fields.push({
                    field: key,
                    grade: item[key]
                })
            }
            console.log(grade.data.splice(0,1));
        }
    }
</script>

<style lang="scss" scoped>

</style>