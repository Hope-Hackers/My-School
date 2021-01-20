<template>
    <div class="container">
        <h5>My Class Students :</h5>
        <br/>  
        <v-row>
            
            <v-card
                class="mx-auto ma-2 pa-2"
                max-width="344"
                v-for="student in students" :key="student.id"
            >
                <v-img
                :src="student.image"
                height="200px"
                ></v-img>

                <v-card-title>
                    {{student.name}}
                </v-card-title>

                <v-card-subtitle>
                    <h6>{{student.class}}</h6>
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
                    @click="onClick(student.id)"
                >
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
                </v-card-actions>

                <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>

                    <v-card-text>
                        {{student.description}}
                    </v-card-text>
                </div>
                </v-expand-transition>
            </v-card>
        </v-row>       
    </div>
</template>

<script>
    export default {
        name: 'ClassStudents',
        data: () => ({
            show: false,
            students: [
                {
                    image: "https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1508/wavebreakmediamicro150801332/43914869-portrait-d-%C3%A9l%C3%A8ve-souriant-calculant-sur-le-tableau-dans-une-classe-%C3%A0-l-%C3%A9cole.jpg",
                    name: "Khaled Yeferni",
                    class: "Cohort 8",
                    description: "Here is my description",
                    id: 1
                },
                {
                    image: "https://lh3.googleusercontent.com/proxy/WNlaO3kZbQhG5WuL1m_a76wa3LzZYlPhitDcBDbLqjbaelIFf_Z4-QYbXSjJEg5ZJfRTmHALs8mqbKnor6Mlo23khncyaCO_AXLUXsM3Tk8",
                    name: "Zied Sradki",
                    class: "Cohort 8",
                    description: "Here is my description",
                    id: 2
                },
                {
                    image: "https://image.freepik.com/photos-gratuite/closeup-portrait-eleve-souriant-garcon-mignon-rentree-scolaire-enfant-sac-dos-premier-jour-ecole_90791-694.jpg",
                    name: "Melek Houidi",
                    class: "Cohort 8",
                    description: "Here is my description",
                    id: 3
                },
                {
                    image: "https://i0.wp.com/taniere-de-kyban.fr/wp-content/uploads/2017/07/opposition_FB.jpg?fit=1200%2C630&ssl=1",
                    name: "Wael Jouini",
                    class: "Cohort 8",
                    description: "Here is my description",
                    id: 4
                }
            ]
        }),
        methods: {
            onClick(id){
                this.students.map(student => {
                    if(id === student.id){
                        this.show = !this.show;
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>