<template>
    <div class="container">
        <h1>Here is the Teacher component</h1><br/>

        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
            <b-col md="6">
                    <b-avatar src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" size="10rem"></b-avatar>               
            </b-col>
            <b-col md="6">
                <b-card-body title="Melek HOUIDI">
                <b-card-text>
                    <h5>English Teacher</h5>
                    Teaching English was my passion. Now, teaching English is my profession.
                </b-card-text>
                </b-card-body>
            </b-col>
            </b-row>
        </b-card>
        <br/><br/>
        <b-card no-body>
            <b-tabs v-model="tabIndex" small card>
                <b-tab title="Schedule">
                    <h3>My Schedule :</h3>
                    <br/>
                    <div>
                        <b-table hover :items="items"></b-table>
                    </div>
                </b-tab>
                <b-tab title="Class">
                    
                        <div>
                            <h6>Select a Class :</h6>
                            <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
                            <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
                        </div>
                        <div>
                            <!-- <v-card
                                class="mx-auto"
                                max-width="344"
                            >
                                <v-img
                                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                height="200px"
                                ></v-img>

                                <v-card-title>
                                Top western road trips
                                </v-card-title>

                                <v-card-subtitle>
                                1,000 miles of wonder
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
                                    @click="show = !show"
                                >
                                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>
                                </v-card-actions>

                                <v-expand-transition>
                                <div v-show="show">
                                    <v-divider></v-divider>

                                    <v-card-text>
                                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                                    </v-card-text>
                                </div>
                                </v-expand-transition>
                            </v-card> -->
                            <v-row>
                                <v-col
                                v-for="n in 9"
                                :key="n"
                                class="d-flex child-flex"
                                cols="4"
                                >
                                    <v-img
                                        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                                        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                                        aspect-ratio="1.5"
                                        class="grey lighten-2"
                                    >
                                        <template v-slot:placeholder>
                                            <v-row
                                                class="fill-height ma-0"
                                                align="center"
                                                justify="center"
                                            >
                                                <v-progress-circular
                                                indeterminate
                                                color="grey lighten-5"
                                                ></v-progress-circular>
                                            </v-row>
                                        </template>
                                    </v-img>
                                </v-col>
                            </v-row>
                        </div>
                    
                </b-tab>
                <b-tab title="Grades">
                    
                        <TeacherGrades/>
                    
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
    import axios from "axios";
    import TeacherGrades from "./TeacherGrades"
    export default {
        name: 'Teacher',
        components: {
            TeacherGrades
        },
        data() {
        return {
            show: false,
            selected: null,
            options: [
            { value: null, text: 'Please select a Class' },
            { value: 'a', text: '1st A' },
            { value: 'b', text: '5th B' },
            { value: { C: '3PO' }, text: '6th B' },
            ],
            tabIndex: 0,
            fetched:false,
            items: []
            }
        },
        async mounted() {
                var schedule = await axios.get('http://localhost:3000/api/schedule')
                    for (var i = 0; i < schedule.data.length; i++){
                    //     // var obj = {
                    //     //     Time: schedule.data[i].Time,
                    //     //     Monday: schedule.data[i].Monday,
                    //     //     Tuesday: schedule.data[i].Tuesday,
                    //     //     Wednesday: schedule.data[i].Wednesday,
                    //     //     Thursday: schedule.data[i].Thursday,
                    //     //     Friday: schedule.data[i].Friday,
                    //     //     Saterday: schedule.data[i].Saterday,
                    //     // }
                        this.items.push(schedule.data[i])
                    }
                    console.log(schedule.data)
                    this.fetched=true                   
            }, 
        methods: {
           
        }
    }
</script>

<style lang="scss" scoped>

</style>