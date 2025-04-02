import { BookingModel } from "../database/models";

export const createBooking = async (
  eventId: string,
  customerName: string,
  customerEmail: string,
  ticketCount: number,
  totalPrice: number
) => {
  try {
    const newBooking = new BookingModel({
      event: eventId,
      customerName,
      customerEmail,
      ticketCount,
      totalPrice,
      status: "Pending", // Default status
    });

    return await newBooking.save();
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getAllBookings = async () => {
  try {
    return await BookingModel.find().populate("event");
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getBookingById = async (bookingId: string) => {
  try {
    return await BookingModel.findById(bookingId).populate("event");
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getBookingsByEvent = async (eventId: string) => {
  try {
    return await BookingModel.find({ event: eventId }).populate("event");
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const updateBookingStatus = async (bookingId: string, status: string) => {
  try {
    return await BookingModel.findByIdAndUpdate(
      bookingId,
      { status },
      { new: true }
    );
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const deleteBooking = async (bookingId: string) => {
  try {
    return await BookingModel.findByIdAndDelete(bookingId);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
