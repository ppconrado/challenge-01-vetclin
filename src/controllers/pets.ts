import { RequestHandler } from "express";

import { TUTORS } from "./tutors";

import { Tutor } from "../models/tutor";
import { Pet } from "../models/pet";

export const createPet: RequestHandler<{ tutorID: string }> = (
  req,
  res,
  next
) => {
  const tutorId = req.params.tutorID;
  const tutorIndex = TUTORS.findIndex((tutor) => tutor.id === tutorId);

  if (tutorIndex < 0) {
    throw new Error("Could not find tutor!");
  }

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
      weight: number;
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

  res.status(201).json(TUTORS[tutorIndex]);
};

export const updatePet: RequestHandler<{ tutorID: string; petID: string }> = (
  req,
  res,
  next
) => {
  const tutorId = req.params.tutorID;

  const petId = req.params.petID;

  const updatePetdName = (req.body as { name: string }).name;

  const updatePetSpecies = (req.body as { species: string }).species;

  const updatePetCarry = (req.body as { carry: string }).carry;

  const updatePetWeight = (req.body as { weight: number }).weight;

  const updatePetDateOfBirth = (req.body as { date_of_birth: string })
    .date_of_birth;

  const tutorIndex = TUTORS.findIndex(
    (tutor: { id: string }) => tutor.id === tutorId
  );

  if (tutorIndex < 0) {
    throw new Error("Could not find tutor!");
  }

  const petIndex = TUTORS[tutorIndex].pets.findIndex(
    (pets: { id: string }) => pets.id === petId
  );

  if (petIndex < 0) {
    throw new Error("Could not find pet!");
  }

  TUTORS[tutorIndex].pets.splice(petIndex, 1);

  const updatedPet = new Pet(
    petId,
    updatePetdName,
    updatePetSpecies,
    updatePetCarry,
    updatePetWeight,
    updatePetDateOfBirth
  );

  TUTORS[tutorIndex].pets.push(updatedPet);

  TUTORS[tutorIndex] = new Tutor(
    TUTORS[tutorIndex].id,
    TUTORS[tutorIndex].name,
    TUTORS[tutorIndex].phone,
    TUTORS[tutorIndex].email,
    TUTORS[tutorIndex].date_of_birth,
    TUTORS[tutorIndex].zip_code,
    TUTORS[tutorIndex].pets
  );

  res.json({
    message: "Updated!",
    updatedPet: updatedPet,
  });
};

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

  TUTORS[tutorIndex].pets.splice(petIndex, 1);

  res.json({ message: "Pet deleted!" });
};
