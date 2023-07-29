import { RequestHandler } from "express";

import { Tutor } from "../models/tutor";
import { Pet } from "../models/pet";

export const TUTORS: Tutor[] = [];

export const createTutor: RequestHandler = (req, res, next) => {
  const name = (
    req.body as {
      name: string;
    }
  ).name;

  const phone = (
    req.body as {
      phone: string;
    }
  ).phone;

  const email = (
    req.body as {
      email: string;
    }
  ).email;

  const date_of_birth = (
    req.body as {
      date_of_birth: string;
    }
  ).date_of_birth;

  const zip_code = (
    req.body as {
      zip_code: string;
    }
  ).zip_code;

  const pets = new Array<Pet>();

  const newTutor = new Tutor(
    Math.random().toString(),
    name,
    phone,
    email,
    date_of_birth,
    zip_code,
    pets
  );

  TUTORS.push(newTutor);

  res.status(201).json(newTutor);
};

export const getTutors: RequestHandler = (req, res, next) => {
  res.status(200).json(TUTORS);
};

export const updateTutor: RequestHandler<{ tutorID: string }> = (
  req,
  res,
  next
) => {
  const tutorId = req.params.tutorID;

  const updatedName = (req.body as { name: string }).name;

  const updatedPhone = (req.body as { phone: string }).phone;

  const updateEmail = (req.body as { email: string }).email;

  const updatedDateOfBirth = (req.body as { date_of_birth: string })
    .date_of_birth;

  const updatedZipCode = (req.body as { zip_code: string }).zip_code;

  const tutorIndex = TUTORS.findIndex((tutor) => tutor.id === tutorId);

  if (tutorIndex < 0) {
    throw new Error("Could not find tutor!");
  }

  const tutorPets = TUTORS[tutorIndex].pets;

  TUTORS.splice(tutorIndex, 1);

  const updatedTutor = new Tutor(
    tutorId,
    updatedName,
    updatedPhone,
    updateEmail,
    updatedDateOfBirth,
    updatedZipCode,
    tutorPets
  );

  TUTORS.push(updatedTutor);

  res.status(200).json({ message: "Updated!", updatedTutor: updatedTutor });
};

export const deleteTutor: RequestHandler<{ tutorID: string }> = (
  req,
  res,
  next
) => {
  const tutorId = req.params.tutorID;

  const tutorIndex = TUTORS.findIndex((tutor) => tutor.id === tutorId);

  if (tutorIndex < 0) {
    throw new Error("Could not find tutor!");
  }

  TUTORS.splice(tutorIndex, 1);

  res.status(200).json({ message: "Tutor deleted!" });
};
