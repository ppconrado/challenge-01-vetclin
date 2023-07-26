if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";

import tutorRoutes from "./routes/tutors";
import petRoutes from "./routes/pets";

const app = express();

// Middlewares //

app.use(json()); // parse the req body

// Main rotas //

app.use("/", tutorRoutes);
app.use("/pet", petRoutes);

// Error handler //

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

// SERVER API port config - 3000 (default) //

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
