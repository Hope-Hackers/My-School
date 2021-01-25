const Schedules = require("../../../database/models/schedule.js");

module.exports = {
    async findAllSchedulesWithoutId(){
        return Schedules.find({},{_id:0}).sort({"Time":1});
    },
  async findAllSchedules() {
    return Schedules.find({}).sort({"Time":1})
  },
    async createSchedule(schedule) {
    return Schedules.create(schedule);
  },
  async deleteSchedule(schedule) {
    return Schedules.deleteOne(schedule);
  },
  async updateSchedule(schedule) {
    return Schedules.findOneAndUpdate({ _id: schedule._id }, schedule, {useFindAndModify: false})
  }
};
