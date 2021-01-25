const Grades = require("../../../database/models/grades.js");

module.exports = {
    async findAllGradesWithoutId(){
        return Grades.find({}).sort({time:-1});
    },
    async findAllGrades() {
        return Grades.find({})
    },
    async createGrade(grade) {
        console.log(grade)
        return Grades.create(grade);
    },
    async deleteGrade(grade) {
        return Grades.deleteOne(grade);
    },
    async updateGrade(grade) {
        return Grades.findOneAndUpdate({ _id: grade._id }, grade, {useFindAndModify: false})
    }
};
