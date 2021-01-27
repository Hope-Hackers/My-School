const ClassSchedules = require("../../../database/models/classSchedule.js");

module.exports = {
    async findAllClassSchedulesWithoutId(){
        return ClassSchedules.find({},{_id:0,class:0}).sort({"time":1});
    },
    async findAllClassSchedules() {
        return ClassSchedules.find({}).sort({"time":1})
    },
    async createClassSchedule(classSchedule) {
        console.log(classSchedule)
        return ClassSchedules.create(classSchedule);
    },
    async deleteClassSchedule(classSchedule) {
        return ClassSchedules.deleteOne(classSchedule);
    },
    async updateClassSchedule(classSchedule) {
        return ClassSchedules.findOneAndUpdate({ _id: classSchedule._id },classSchedule, {useFindAndModify: false})
    },
    async findClassSchedule(filter) {
        return ClassSchedules.find(filter,{_id:0,class:0}).sort({"time":1});
    },
    async findClassScheduleId(filter) {
        return ClassSchedules.find(filter,{class:0}).sort({"time":1});
    }
};
