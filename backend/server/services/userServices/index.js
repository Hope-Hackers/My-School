const Users = require("../../../database/models/user");

module.exports = {
  async findAllUsers() {
    return Users.find({});
  },
  async createUser(user) {
    return Users.create(user);
  },
  async deleteUser(user) {
    return Users.deleteOne(user);
  },
  async updateUser(user) {
    return Users.findOneAndUpdate({ _id: user._id },user,{useFindAndModify: false})
  },
};
