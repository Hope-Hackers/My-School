const Schedules = require("../../../database/models/schedule.js");

module.exports = {
    async findAllSchedulesWithoutId(){
        return Schedules.find({}).select("-_id");
    },
  async findAllSchedules() {
    return Schedules.find({})
  },
    async createSchedule(schedule) {
      console.log(schedule)
    return Schedules.create(schedule);
  },
};
