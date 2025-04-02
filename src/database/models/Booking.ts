import { Schema, Document, model } from "mongoose";
import { IEvent } from "./Event";

export interface IBooking extends Document {
  event: IEvent["_id"];  // Reference to Event
  customerName: string;
  customerEmail: string;
  ticketCount: number;
  totalPrice: number;
  status: "Pending" | "Confirmed" | "Cancelled";
  createdAt?: Date;
  updatedAt?: Date;
}

const bookingSchema = new Schema<IBooking>(
  {
    event: { type: Schema.Types.ObjectId, ref: "Event", required: true },
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true },
    ticketCount: { type: Number, required: true, min: 1 },
    totalPrice: { type: Number, required: true },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export const BookingModel = model<IBooking>("Booking", bookingSchema);
