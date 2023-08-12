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

// export const updatePet: RequestHandler<{ tutorID: string; petID: string }> = (
//   req,
//   res,
//   next
// ) => {
//   const tutorId = req.params.tutorID;
//   const petId = req.params.petID;

//   const updatedName = (req.body as { name: string }).name;

//   const updatedPhone = (req.body as { phone: string }).phone;

//   const updateEmail = (req.body as { email: string }).email;

//   const updatedDateOfBirth = (req.body as { date_of_birth: string })
//     .date_of_birth;

//   const updatedZipCode = (req.body as { zip_code: string }).zip_code;

//   const updatePets = (req.body as { pets: Pet[] }).pets;

//   const tutorIndex = TUTORS.findIndex((tutor) => tutor.id === tutorId);

//   const pets = TUTORS[tutorIndex].pets;

//   const petIndex = pets.findIndex((pets) => pets.id === petId);

//   if (tutorIndex < 0) {
//     throw new Error("Could not find tutor!");
//   }

//   if (petIndex < 0) {
//     throw new Error("Could not find pet!");
//   }

//   TUTORS[tutorIndex] = new Tutor(
//     TUTORS[tutorIndex].id,
//     updatedName,
//     updatedPhone,
//     updateEmail,
//     updatedDateOfBirth,
//     updatedZipCode,
//     updatePets
//   );

//   TUTORS[tutorIndex].pets[petIndex];

//   res.json({
//     message: "Updated!",
//     updatedPet: TUTORS[tutorIndex].pets[petIndex],
//   });
// };

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
