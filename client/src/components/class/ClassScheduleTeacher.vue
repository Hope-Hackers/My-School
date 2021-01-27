<template>
    <div class="container">
        <h5 v-if="selected">{{selected}} Schedule :</h5>
        <br/>
        <div>
            <b-table hover :items="schedules"></b-table>
        </div>          
    </div>
</template>

<script>
    export default {
        name: 'ClassScheduleTeacher',
        props:{
            selected:String,
            schedules:Array
        },
        data() {
        return {
            fetched:false,
            }
        },
       
    }
</script>

<style lang="scss" scoped>

</style>