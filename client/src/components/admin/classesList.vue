<template>
  <div>
    <TeacherGrades />
  </div>
</template>

<script>
import TeacherGrades from "../Teacher/TeacherGrades";
export default {
  components: {
    TeacherGrades,
  },
  data: () => ({
    dialog: false,
  }),
};
</script>
