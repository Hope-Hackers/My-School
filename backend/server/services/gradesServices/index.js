const Grades = require("../../../database/models/grades.js");

module.exports = {
    async findAllGradesWithoutId(){
        return Grades.find({}).select("-_id").sort({time:-1});
    },
  async findAllGrades() {
    return Grades.find({})
  },
    async createGrade(grade) {
      console.log(grade)
    return Grades.create(grade);
  },
};
