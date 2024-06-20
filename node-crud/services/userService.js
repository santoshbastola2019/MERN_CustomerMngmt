const User = require("../models/user");

class UserServices {
  async createUser(name, email, phone) {
    const newUser = new User({ name, email, phone });
    return await newUser.save();
  }

  async getAllUsers() {
    return await User.find();
  }

  async getUserbyId(userId) {
    return await User.findById(userId);
  }

  async updateUser(userId, updateData) {
    return await User.findByIdAndUpdate(userId, updateData);
  }
}

module.exports = new UserServices();
