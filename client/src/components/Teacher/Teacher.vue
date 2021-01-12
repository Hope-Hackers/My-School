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
                    I'm the second tab
                    <b-card>I'm the card in tab</b-card>
                </b-tab>
                <b-tab title="Students">
                    I'm the third tab
                    <b-card>I'm the card in tab</b-card>
                </b-tab>
                <b-tab title="Info">I'm the last tab</b-tab>
            </b-tabs>
        </b-card>

        <!-- Control buttons-->
        <div class="text-center">
            <b-button-group class="mt-2">
                <b-button @click="tabIndex--">Previous</b-button>
                <b-button @click="tabIndex++">Next</b-button>
            </b-button-group>

            <div class="text-muted">Current Tab: {{ tabIndex }}</div>
        </div>
        
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'Teacher',
        data() {
        return {
            tabIndex: 0,
            fetched:false,
            items: []
            }
        },
        async mounted() {
                var schedule = await axios.get('http://localhost:3000/api/schedule')
                    for (var i = 0; i < schedule.data.length; i++){
                        var obj = {
                            Time: schedule.data[i].Time,
                            Monday: schedule.data[i].Monday,
                            Tuesday: schedule.data[i].Tuesday,
                            Wednesday: schedule.data[i].Wednesday,
                            Thursday: schedule.data[i].Thursday,
                            Friday: schedule.data[i].Friday,
                            Saterday: schedule.data[i].Saterday,
                        }
                        this.items.push(obj)
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