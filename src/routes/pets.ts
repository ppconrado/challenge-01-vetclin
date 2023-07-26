import { Router } from "express";

import { createPet, updatePet, deletePet } from "../controllers/pets";

const router = Router();

// POST/pet/:tutorId-> Creates a pet and adds it to a tutor

router.post("/:id", createPet);

// PUT/pet/:petId/tutor/:tutorId -> updates a pet's info

router.put("/:petID/tutor/:tutorID", updatePet);

// DELETE/pet/:petId/tutor/:tutorId -> deletes a pet from a tutor.

router.delete("/:petID/tutor/:tutorID", deletePet);

export default router;

// app.use("/pet", petRoutes) - main rota //
