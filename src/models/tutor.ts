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
export const tutorSchema = new Schema<ITutor>(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    date_of_birth: { type: String, required: true },
    zip_code: { type: String, required: true },
    pets: [{ type: Schema.Types.ObjectId, ref: "Pet" }],
  }
  // { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// tutorSchema.virtual("pets", {
//   ref: "Pet",
//   localField: "_id",
//   foreignField: "pet",
//   justOne: false,
// });

// 3. Create a Model.
export const Tutor = model<ITutor>("Tutor", tutorSchema);
