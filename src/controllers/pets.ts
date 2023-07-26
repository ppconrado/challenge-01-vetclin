import { RequestHandler } from "express"; // (req: Request, res: Response, next:NextFunction)

import { TUTORS } from "./tutors";

import { Tutor } from "../models/tutor";
import { Pet } from "../models/pet";

// //////////////////// POST/pet/:tutorId-> Creates a pet and adds it to a tutor.

export const createPet: RequestHandler = (req, res, next) => {
  //
  const tutorId = req.params.id;
  const tutorIndex = TUTORS.findIndex((tutor) => tutor.id === tutorId);

  if (tutorIndex < 0) {
    throw new Error("Could not find tutor!");
  }
  //
  const name = (
    req.body as {
      name: string;
    }
  ).name;

  const species = (
    req.body as {
      species: string;
    }
  ).species;

  const carry = (
    req.body as {
      carry: string;
    }
  ).carry;
  const weight = (
    req.body as {
      weight: string;
    }
  ).weight;

  const date_of_birth = (
    req.body as {
      date_of_birth: string;
    }
  ).date_of_birth;

  const newPet = new Pet(
    Math.random().toString(),
    name,
    species,
    carry,
    weight,
    date_of_birth
  );

  TUTORS[tutorIndex].pets.push(newPet);

  TUTORS[tutorIndex] = new Tutor(
    TUTORS[tutorIndex].id,
    TUTORS[tutorIndex].name,
    TUTORS[tutorIndex].phone,
    TUTORS[tutorIndex].email,
    TUTORS[tutorIndex].date_of_birth,
    TUTORS[tutorIndex].zip_code,
    TUTORS[tutorIndex].pets
  );

  // TUTORS.push(TUTORS[tutorIndex]);
  // res.json({ message: "Updated!", updatedTutor: TUTORS[tutorIndex] });
  res.status(201).json(TUTORS[tutorIndex]);
};

//////////////////////// PUT/pet/:petId/tutor/:tutorId -> updates a pet's info

export const updatePet: RequestHandler<{ tutorID: string; petID: string }> = (
  req,
  res,
  next
) => {
  //
  const tutorId = req.params.tutorID;
  const petId = req.params.petID;
  //
  const updatedName = (req.body as { name: string }).name;
  const updatedPhone = (req.body as { phone: string }).phone;
  const updateEmail = (req.body as { email: string }).email;
  const updatedDateOfBirth = (req.body as { date_of_birth: string })
    .date_of_birth;
  const updatedZipCode = (req.body as { zip_code: string }).zip_code;
  const updatePets = (req.body as { pets: Pet[] }).pets;

  const tutorIndex = TUTORS.findIndex((tutor) => tutor.id === tutorId);

  const pets = TUTORS[tutorIndex].pets;

  const petIndex = pets.findIndex((pets) => pets.id === petId);

  if (tutorIndex < 0) {
    throw new Error("Could not find tutor!");
  }
  if (petIndex < 0) {
    throw new Error("Could not find pet!");
  }

  TUTORS[tutorIndex] = new Tutor(
    TUTORS[tutorIndex].id,
    updatedName,
    updatedPhone,
    updateEmail,
    updatedDateOfBirth,
    updatedZipCode,
    updatePets
  );

  res.json({ message: "Updated!", updatedTutor: TUTORS[tutorIndex] });
};

//////////////////////// DELETE/pet/:petId/tutor/:tutorId -> deletes a pet from a tutor.

export const deletePet: RequestHandler<{ tutorID: string; petID: string }> = (
  req,
  res,
  next
) => {
  const tutorId = req.params.tutorID;
  const petId = req.params.petID;

  const tutorIndex = TUTORS.findIndex((tutor) => tutor.id === tutorId);

  const pets = TUTORS[tutorIndex].pets;

  const petIndex = pets.findIndex((pets) => pets.id === petId);

  if (tutorIndex < 0) {
    throw new Error("Could not find tutor!");
  }

  if (petIndex < 0) {
    throw new Error("Could not find pet!");
  }

  // TUTORS.splice(petIndex, 1);

  TUTORS[tutorIndex].pets.splice(petIndex, 1);

  res.json({ message: "Pet deleted!" });
};
