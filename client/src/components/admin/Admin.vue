<template>
  <div data-app class="container" id="adminwidth">
    <v-card>
      <v-tabs color="light-blue darken-1" left>
        <v-tab v-for="item in tabs" :key="item">{{ item }}</v-tab>

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
            <AdminClassSchedule />
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <v-container fluid>
            <AdminTeacherSchedule />
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <v-container fluid>
            <ContactAdmin />
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import StudentsList from "./StudentsList";
import ClassesList from "./ClassesList";
import TeachersList from "./TeachersList";
import AdminTeacherSchedule from "./AdminTeacherSchedule";
import AdminClassSchedule from "./AdminClassSchedule";
import ContactAdmin from "./ContactAdmin";
export default {
  name: "Admin",
  components: {
    StudentsList,
    ClassesList,
    TeachersList,
    AdminTeacherSchedule,
    AdminClassSchedule,
    ContactAdmin,
  },
  data: () => ({
    tabs: [
      "Students List",
      "Classes Grades",
      "Parent vew",
      "Class Schedule",
      "Teacher Schedule",
      "Contact"
    ],
    components: [StudentsList, ClassesList, TeachersList],
  }),
};
</script>

<style lang="scss" scoped>
div#adminwidth {
  width: 1050px;
  margin-left: 257px;
}
</style>
