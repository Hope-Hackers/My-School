<template>
  <div class="container">
    <h5>{{students.class}} Schedule :</h5>
    <br />
    <div>
      <b-table hover :items="items"></b-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ClassSchedule",
  data() {
    return {
      fetched: false,
      items: [],
      students: '',
    };
  },
  async mounted() {
    // var schedules = await axios.post("http://localhost:7000/api/classSchedule/filter",{ class: parent.class });
    // this.items = schedules.data.classSchedule;
    var parent = await axios.post('http://localhost:7000/api/users/filterByToken',{
      token:localStorage.token
      
    })
    
    var classStudent = await axios.post("http://localhost:7000/api/classStudents/filter",{studentId:parent.data.childId})
    this.students = JSON.parse(JSON.stringify(classStudent.data.classStudents))
    console.log('classStudent',classStudent.data.classStudents)

    var classSchedule = await axios.post("http://localhost:7000/api/classSchedule/filter",{class:classStudent.data.classStudents.class})
    // console.log(classSchedule.data.classSchedule)
    let data = JSON.parse(JSON.stringify(classSchedule.data.classSchedule))
    console.log(data)
    for (var i = 0; i < data.length; i++){
      this.items.push(JSON.parse(JSON.stringify(data[i])))} 
  },
};
</script>

<style lang="scss" scoped></style>
