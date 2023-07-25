import { RequestHandler } from "express"; // (req: Request, res: Response, next:NextFunction)

import { Tutor } from "../models/tutor";

const TUTORS: Tutor[] = [];

/////////////////////////// POST/tutor -> Create a new tutor.

export const createTutor: RequestHandler = (req, res, next) => {
  //
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

  const newTutor = new Tutor(
    Math.random().toString(),
    name,
    phone,
    email,
    date_of_birth,
    zip_code
  );

  TUTORS.push(newTutor);

  res
    .status(201)
    .json({ message: "Created the tutor.", createdTutor: newTutor });
};

///////////////////// GET /tutors -> Retrieves all tutors.

export const getTutors: RequestHandler = (req, res, next) => {
  res.json({ tutors: TUTORS });
};

///////////////////// PUT/tutor/:id -> Updates a tutor.

export const updateTutor: RequestHandler<{ id: string }> = (req, res, next) => {
  //
  const tutorId = req.params.id;

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

  TUTORS[tutorIndex] = new Tutor(
    TUTORS[tutorIndex].id,
    updatedName,
    updatedPhone,
    updateEmail,
    updatedDateOfBirth,
    updatedZipCode
  );

  res.json({ message: "Updated!", updatedTutor: TUTORS[tutorIndex] });
};

////////////////////  DELETE/tutor/:id -> Deletes a tutor.

export const deleteTutor: RequestHandler = (req, res, next) => {
  const tutorId = req.params.id;

  const tutorIndex = TUTORS.findIndex((tutor) => tutor.id === tutorId);

  if (tutorIndex < 0) {
    throw new Error("Could not find todo!");
  }

  TUTORS.splice(tutorIndex, 1);

  res.json({ message: "Tutor deleted!" });
};
