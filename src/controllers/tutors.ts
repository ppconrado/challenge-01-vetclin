import { RequestHandler } from "express";

import { Tutor } from "../models/tutor";

export const createTutor: RequestHandler = async (req, res, next) => {
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

  try {
    const tutor = new Tutor({ name, phone, email, date_of_birth, zip_code });
    tutor.save();
    res.status(201).json(tutor);
  } catch (e) {
    //
  }
};

export const getTutors: RequestHandler = async (req, res, next) => {
  Tutor.find()
    .populate({
      path: "pets",
      select: "",
    })
    .then((tutors) => {
      res.status(200).json(tutors);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while retrieving tutors.",
      });
    });
};

export const updateTutor: RequestHandler<{ tutorID: string }> = async (
  req,
  res,
  next
) => {
  //
  const tutorId = req.params.tutorID;

  const nameUpdated = (req.body as { name: string }).name;

  const phoneUpdated = (req.body as { phone: string }).phone;

  const emailUpdated = (req.body as { email: string }).email;

  const date_of_birthUpdated = (req.body as { date_of_birth: string })
    .date_of_birth;

  const zip_codeUpdated = (req.body as { zip_code: string }).zip_code;

  const tutorNew = await Tutor.findByIdAndUpdate(
    { _id: tutorId },
    {
      name: nameUpdated,
      phone: phoneUpdated,
      email: emailUpdated,
      date_of_birth: date_of_birthUpdated,
      zip_code: zip_codeUpdated,
    }
  );

  res.json({ message: "Updated!", tutorNew });
};

// export const deleteTutor: RequestHandler<{ tutorID: string }> = (
//   req,
//   res,
//   next
// ) => {
//   const tutorId = req.params.tutorID;

//   const tutorIndex = TUTORS.findIndex((tutor) => tutor.id === tutorId);

//   if (tutorIndex < 0) {
//     throw new Error("Could not find tutor!");
//   }

//   TUTORS.splice(tutorIndex, 1);

//   res.json({ message: "Tutor deleted!" });
// };
