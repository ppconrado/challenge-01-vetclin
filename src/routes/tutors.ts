import { Router } from "express";

import {
  createTutor,
  getTutors,
  updateTutor,
  deleteTutor,
} from "../controllers/tutors";

const router = Router();

router.post("/", createTutor);

router.get("/", getTutors);

router.put("/:id", updateTutor);

router.delete("/:id", deleteTutor);

export default router;
