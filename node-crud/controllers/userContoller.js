const userService = require("../services/userService");

class UserController {
  async createUser(req, res) {
    try {
      const { name, email, phone } = req.body;
      const saveUser = await userService.createUser(name, email, phone);
      res.json({ saveUser });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      res.json({ users });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getUserbyId(req, res) {
    const userId = req.params.id;
    try {
      const user = await userService.getUserbyId(userId);
      if (!user) return res.status(404).json({ error: "User not found" });
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new UserController();
