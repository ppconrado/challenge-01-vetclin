import { Router } from "express";

// import { createPet, updatePet, deletePet } from "../controllers/pets";
import { createPet } from "../controllers/pets";

const router = Router();

router.post("/pet/:tutorID", createPet);

// router.put("/:petID/tutor/:tutorID", updatePet);

// router.delete("/:petID/tutor/:tutorID", deletePet);

export default router;
