import { Pet } from "./pet";

import { Schema, model } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
interface ITutor {
  name: string;
  phone: string;
  email: string;
  date_of_birth: string;
  zip_code: string;
  pets: string[];
}

// 2. Create a Schema corresponding to the document interface.
const tutorSchema = new Schema<ITutor>({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  date_of_birth: { type: String, required: true },
  zip_code: { type: String, required: true },
  pets: [
    {
      type: Schema.Types.ObjectId,
      ref: "Pet",
    },
  ],
});

// 3. Create a Model.
const Tutor = model<ITutor>("Tutor", tutorSchema);

// export class Tutor {
//   constructor(
//     public id: string,
//     public name: string,
//     public phone: string,
//     public email: string,
//     public date_of_birth: string,
//     public zip_code: string,
//     public pets: Pet[]
//   ) {}
// }
