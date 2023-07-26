import { Router } from "express";

import {
  createTutor,
  getTutors,
  updateTutor,
  deleteTutor,
} from "../controllers/tutors";

const router = Router();

// GET /tutors -> Retrieves all tutors.

router.get("/tutors", getTutors);

// POST/tutor -> Create a new tutor.

router.post("/tutor", createTutor);

// PUT/tutor/:id -> Updates a tutor.

router.put("/tutor/:id", updateTutor);

// DELETE/tutor/:id -> Deletes a tutor.

router.delete("/tutor/:id", deleteTutor);

export default router;

// app.use("/", tutorRoutes); - main rota //
