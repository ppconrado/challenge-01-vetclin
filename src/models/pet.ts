import mongoose, { Schema, model } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
interface IPet {
  name: string;
  species: string;
  carry: string;
  weight: string;
  date_of_birth: string;
}

// 2. Create a Schema corresponding to the document interface.
export const petSchema = new Schema<IPet>({
  name: { type: String, required: true },
  species: { type: String, required: true },
  carry: { type: String, required: true },
  weight: { type: String, required: true },
  date_of_birth: { type: String, required: true },
});

// 3. Create a Model.
export const Pet = model<IPet>("Pet", petSchema);
