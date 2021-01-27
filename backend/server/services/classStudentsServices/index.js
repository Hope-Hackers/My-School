const ClassStudents = require("../../../database/models/classStudents.js");

module.exports = {
    async findAllClassStudentsWithoutId(){
        return ClassStudents.find({},{_id:0}).sort({"time":1});
    },
    async findAllClassStudents() {
        return ClassStudents.find({})
    },
    async createClassStudent(classStudent) {
        console.log(classStudent)
        return ClassStudents.create(classStudent);
    },
    async deleteStudent(classStudent) {
        return ClassStudents.deleteOne(classStudent);
    },
    async updateStudent(classStudent) {
        return ClassStudents.findOneAndUpdate({ _id: classStudent._id },classStudent,{useFindAndModify: false})
    },
    async findClassStudents(filter) {
        return ClassStudents.find(filter);
    }
};