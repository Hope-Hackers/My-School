const Schedules = require("../../../database/models/schedule");

module.exports = {
  async findAllSchedules() {
    return Schedules.find({});
  },
  async createSchedule(schedule) {
    return Schedules.create(schedule);
  },
};
