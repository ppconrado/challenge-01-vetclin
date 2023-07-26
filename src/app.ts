if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";

import tutorRoutes from "./routes/tutors";
import petRoutes from "./routes/pets";

const app = express();

app.use(json());

app.use("/", tutorRoutes);
app.use("/pet", petRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(process.env.PORT || 3000);
