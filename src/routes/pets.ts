import { Router } from "express";

import { createPet, updatePet, deletePet } from "../controllers/pets";

const router = Router();

router.post("/pet/:tutorID", createPet);

router.put("/pet/:petID/tutor/:tutorID", updatePet);

router.delete("/pet/:petID/tutor/:tutorID", deletePet);

export default router;
