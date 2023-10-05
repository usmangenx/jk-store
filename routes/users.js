import express from "express";
import {
  getUsers,
  createUser,
  findUser,
  deleteUser,
  updateUser,
  login,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", findUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

router.post("/login", login);

export default router;
