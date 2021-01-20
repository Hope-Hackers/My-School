const Schedules = require("../../../database/models/schedule.js");

module.exports = {
    async findAllSchedulesWithoutId(){
        return Schedules.find({},{_id:0}).sort({"Time":1});
    },
  async findAllSchedules() {
    return Schedules.find({})
  },
    async createSchedule(schedule) {
      console.log(schedule)
    return Schedules.create(schedule);
  },
};
