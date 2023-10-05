import express from "express";
import bodyparser from "body-parser";
import router from "./routes/users.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());

app.use(bodyparser.json());

app.use("/users", router);

app.listen(PORT, () =>
  console.log(`server is running on : http://localhost:${PORT}`)
);
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
