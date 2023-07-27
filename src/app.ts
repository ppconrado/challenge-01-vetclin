if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
import { connectDB } from "./db/connect";
import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";

import tutorRoutes from "./routes/tutors";
import petRoutes from "./routes/pets";

const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/VetClin";

const start = async () => {
  try {
    await connectDB(dbUrl);
    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};

start();

const app = express();

app.use(json());

app.use("/", tutorRoutes);
app.use("/pet", petRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(process.env.PORT || 3000);
