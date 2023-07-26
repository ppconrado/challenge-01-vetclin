import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";

import tutorRoutes from "./routes/tutors";
import petRoutes from "./routes/pet";

const app = express();

// middlewares

app.use(json()); // parse the req body

// Main rotas

app.use("/", tutorRoutes);
app.use("/pet", petRoutes);

// Error handler

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

// Port 3000

app.listen(3000);
