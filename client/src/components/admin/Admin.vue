<template>
    <div>
        <v-card>
            <v-tabs
            color="light-blue darken-1"
            left
            >
            <v-tab v-for="item in tabs" :key="item">{{item}}</v-tab>
            
            <v-tab-item>
                <v-container fluid>
                   <StudentsList /> 
                </v-container>
            </v-tab-item>
            <v-tab-item>
                <v-container fluid>
                   <ClassesList /> 
                </v-container>
            </v-tab-item>
            <v-tab-item>
                <v-container fluid>
                   <TeachersList /> 
                </v-container>
            </v-tab-item>
            <v-tab-item>
                <v-container fluid>
                    <AdminClassSchedule/>
                </v-container>
            </v-tab-item>
            <v-tab-item>
                <v-container fluid>
                   <AdminTeacherSchedule/>
                </v-container>
            </v-tab-item>
            <v-tab-item>
                <v-container fluid>
                   <AdminUsers/>
                </v-container>
            </v-tab-item>
            </v-tabs>
        </v-card>         
    </div>
</template>

<script>
    import StudentsList from "./StudentsList"
    import ClassesList from "./ClassesList"
    import TeachersList from "./TeachersList"
    import AdminTeacherSchedule from "./AdminTeacherSchedule"
    import AdminClassSchedule from "./AdminClassSchedule"
    import AdminUsers from "./AdminUsers"
    export default {
        name: "Admin",
        components: {
            StudentsList,
            ClassesList,
            TeachersList,
            AdminTeacherSchedule,
            AdminClassSchedule,
            AdminUsers
        },
        data: () => ({
            tabs: [
                "Students List",
                "Classes Grades",
                "Parent vew",
                "Class Schedule",
                "Teacher Schedule",
                "Users Manager"
            ],
        })
    }
</script>

<style lang="scss" scoped>

</style>