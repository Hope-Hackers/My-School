const ClassSchedules = require("../../../database/models/classSchedule.js");

module.exports = {
    async findAllClassSchedulesWithoutId(){
        return ClassSchedules.find({},{_id:0}).sort({"time":1});
    },
    async findAllClassSchedules() {
        return ClassSchedules.find({})
    },
    async createClassSchedule(classSchedule) {
        console.log(classSchedule)
        return ClassSchedules.create(classSchedule);
    },
};
