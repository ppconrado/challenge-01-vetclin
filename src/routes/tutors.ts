import { Router } from "express";

import {
  getTutors,
  createTutor,
  updateTutor,
  deleteTutor,
} from "../controllers/tutors";

const router = Router();

router.get("/tutors", getTutors);

router.post("/tutor", createTutor);

router.put("/tutor/:tutorID", updateTutor);

router.delete("/tutor/:tutorID", deleteTutor);

export default router;
