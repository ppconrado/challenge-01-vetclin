import { RequestHandler } from "express";

import { Tutor } from "../models/tutor";
import { Pet } from "../models/pet";

export const createPet: RequestHandler<{ tutorID: string }> = async (
  req,
  res,
  next
) => {
  const tutorId = req.params.tutorID;

  const tutor = await Tutor.findOne({ _id: tutorId });

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

  const pet = new Pet({ name, species, carry, date_of_birth, weight });

  tutor?.pets.push(pet.id);

  await pet.save();

  await tutor?.save();

  res.status(201).json({ pet });
};

export const updatePet: RequestHandler<{
  tutorID: string;
  petID: string;
}> = async (req, res, next) => {
  const tutorId = req.params.tutorID;

  const petId = req.params.petID;

  const updatePetName = (req.body as { name: string }).name;

  const updatedPetSpecies = (req.body as { species: string }).species;

  const updatedPetCarry = (req.body as { carry: string }).carry;

  const updatedPetWeight = (req.body as { weight: string }).weight;

  const updatedPetDateOfBirth = (req.body as { date_of_birth: string })
    .date_of_birth;

  const pet = await Pet.findByIdAndUpdate(
    { _id: petId },
    {
      name: updatePetName,
      species: updatedPetSpecies,
      carry: updatedPetCarry,
      weight: updatedPetWeight,
      date_of_birth: updatedPetDateOfBirth,
    }
  );

  res.json({
    message: "Updated!",
  });
};

export const deletePet: RequestHandler<{
  tutorID: string;
  petID: string;
}> = async (req, res, next) => {
  const tutorId = req.params.tutorID;
  const petId = req.params.petID;

  const tutor = await Tutor.findByIdAndUpdate(
    { _id: tutorId },
    {
      $pull: { pets: { _id: petId } },
    }
  );

  const pet = await Pet.findByIdAndDelete({ _id: petId });

  res.json({ message: "Pet deleted!", Pet: pet, Tutor: tutor });
};
