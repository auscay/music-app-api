import { BookingModel, EventModel } from "../database/models";
import {
  createBooking,
  getAllBookings,
  getBookingById,
  getBookingsByEvent,
  updateBookingStatus,
  deleteBooking,
} from "../repository/bookingRepository";

const bookingService = {
  async createNewBooking(
    eventId: string,
    customerName: string,
    customerEmail: string,
    ticketCount: number
  ) {
    try {
      const event = await EventModel.findById(eventId);
      if (!event) {
        throw new Error("Event not found");
      }

      if (event.ticketsAvailable < ticketCount) {
        throw new Error("Not enough tickets available");
      }

      const totalPrice = ticketCount * event.ticketPrice;

      event.ticketsAvailable -= ticketCount;
      await event.save();

      return await createBooking(eventId, customerName, customerEmail, ticketCount, totalPrice);
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  async getAllBookings() {
    return await getAllBookings();
  },

  async getBookingById(bookingId: string) {
    
    const booking = await BookingModel.findById(bookingId);
    if (!booking) {
      throw new Error("Booking not found");
    }
    return booking;
  },

  async getBookingsByEvent(eventId: string) {

    const event = await EventModel.findById(eventId);
    if (!event) {
      throw new Error("Event not found");
    }
    return await getBookingsByEvent(eventId);
  },

  async updateBookingStatus(bookingId: string, status: string) {

    const booking = await BookingModel.findById(bookingId);
    if (!booking) {
      throw new Error("Booking not found");
    }
    return await updateBookingStatus(bookingId, status);
  },

  async deleteBooking(bookingId: string) {

    const booking = await BookingModel.findById(bookingId);
    if (!booking) {
      throw new Error("Booking not found");
    }
    return await deleteBooking(bookingId);
  }
};

export { bookingService };
