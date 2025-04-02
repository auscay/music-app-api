import { Schema, Document, model } from "mongoose";
import { IArtist } from "./Artist";

export interface IEvent extends Document {
  title: string;
  description: string;
  date: Date;
  location: string;
  artist: IArtist["_id"]; // Reference to Artist
  ticketPrice: number;
  ticketsAvailable: number;
}

const eventSchema = new Schema<IEvent>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    artist: { type: Schema.Types.ObjectId, ref: "Artist", required: true }, // Foreign Key
    ticketPrice: { type: Number, required: true },
    ticketsAvailable: { type: Number, required: true }
  },
  { timestamps: true }
);

export const EventModel = model<IEvent>("Event", eventSchema);
