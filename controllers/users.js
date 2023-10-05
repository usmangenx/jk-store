import User from "../models/userSchema.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send("Error fetching users from the database");
  }
};

export const createUser = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const newUser = new User({ username, password });
    await newUser.save();

    res.send(`User with the name ${username} added to the database`);
  } catch (error) {
    res.status(500).send("Error creating user");
  }
};

export const findUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.send(user);
  } catch (error) {
    res.status(500).send("Error fetching user");
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).send("User not found");
    }
    res.send("User is deleted");
  } catch (error) {
    res.status(500).send("Error deleting user");
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { username, password },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).send("User not found");
    }

    res.send("User is updated");
  } catch (error) {
    res.status(500).send("Error updating user");
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    return res.json({ message: "Login successful" });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Server error" });
  }
};
