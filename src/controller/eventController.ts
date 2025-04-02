import { CreateEventInput, UpdateEventInput } from "../interface";
import { eventService } from "../services";

const eventController = {
  async createEvent(input: CreateEventInput) {
    try {
      const newEvent = await eventService.createNewEvent(input);
      return { success: true, data: newEvent };
    } catch (error: any) {
      return { success: false, message: error.message };
    }
  },

  async getAllEvents() {
    try {
      const events = await eventService.getAllEvents();
      return { success: true, data: events };
    } catch (error: any) {
      return { success: false, message: error.message };
    }
  },

  async getEventById(eventId: string) {
    try {
      const event = await eventService.getEventById(eventId);
      if (!event) {
        return { success: false, message: "Event not found" };
      }
      return { success: true, data: event };
    } catch (error: any) {
      return { success: false, message: error.message };
    }
  },

  async getEventsByArtist(artistId: string) {
    try {
      const events = await eventService.getEventsByArtist(artistId);
      return { success: true, data: events };
    } catch (error: any) {
      return { success: false, message: error.message };
    }
  },

  async updateEvent(eventId: string, input: UpdateEventInput) {
    try {
      const updatedEvent = await eventService.updateEvent(eventId, input);
      if (!updatedEvent) {
        return { success: false, message: "Event not found" };
      }
      return { success: true, data: updatedEvent };
    } catch (error: any) {
      return { success: false, message: error.message };
    }
  },

  async deleteEvent(eventId: string) {
    try {
      const deletedEvent = await eventService.deleteEvent(eventId);
      if (!deletedEvent) {
        return { success: false, message: "Event not found" };
      }
      return { success: true, message: "Event deleted successfully" };
    } catch (error: any) {
      return { success: false, message: error.message };
    }
  }
};

export { eventController };
