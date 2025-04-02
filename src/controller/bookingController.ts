import { bookingService } from "../services/bookingService";
import { CreateBookingInput, UpdateBookingStatusInput } from "../interface";

const bookingController = {
  async createBooking(input: CreateBookingInput) {
    try {
      const newBooking = await bookingService.createNewBooking(
        input.eventId,
        input.customerName,
        input.customerEmail,
        input.ticketCount
      );

      return { success: true, data: newBooking };
    } catch (error: any) {
      return { success: false, data: error.message };
    }
  },

  async getAllBookings() {
    try {
      const bookings = await bookingService.getAllBookings();
      return { success: true, data: bookings };
    } catch (error: any) {
      return { success: false, data: error.message };
    }
  },

  async getBookingById(bookingId: string) {
    try {
      const booking = await bookingService.getBookingById(bookingId);
      if (!booking) {
        return { success: false, data: "Booking not found" };
      }
      return { success: true, data: booking };
    } catch (error: any) {
      return { success: false, data: error.message };
    }
  },

  async getBookingsByEvent(eventId: string) {
    try {
      const bookings = await bookingService.getBookingsByEvent(eventId);
      return { success: true, data: bookings };
    } catch (error: any) {
      return { success: false, data: error.message };
    }
  },

  async updateBookingStatus(bookingId: string, input: UpdateBookingStatusInput) {
    try {
      if (!["Pending", "Confirmed", "Cancelled"].includes(input.status)) {
        return { success: false, data: "Invalid status value" };
      }

      const updatedBooking = await bookingService.updateBookingStatus(bookingId, input.status);
      if (!updatedBooking) {
        return { success: false, data: "Booking not found" };
      }
      return { success: true, data: updatedBooking };
    } catch (error: any) {
      return { success: false, data: error.message };
    }
  },

  async deleteBooking(bookingId: string) {
    try {
      const deletedBooking = await bookingService.deleteBooking(bookingId);
      if (!deletedBooking) {
        return { success: false, data: "Booking not found" };
      }
      return { success: true, data: "Booking deleted" };
    } catch (error: any) {
      return { success: false, data: error.message };
    }
  },
};

export { bookingController };
