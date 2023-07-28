import { Router } from "express";

import { createPet, updatePet, deletePet } from "../controllers/pets";

const router = Router();

router.post("/:tutorID", createPet);

router.put("/:petID/tutor/:tutorID", updatePet);

router.delete("/:petID/tutor/:tutorID", deletePet);

export default router;
