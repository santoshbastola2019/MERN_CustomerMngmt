const User = require("../models/user");

class UserServices {
  async createUser(name, email, phone) {
    const newUser = new User({ name, email, phone });
    return await newUser.save();
  }
}

module.exports = new UserServices();
