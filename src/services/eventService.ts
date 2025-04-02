import { CreateEventInput, UpdateEventInput } from "../interface";
import { 
  createEvent, 
  getAllEvents, 
  getEventById, 
  getEventsByArtist, 
  updateEvent, 
  deleteEvent,
  getArtistById 
} from "../repository";

const eventService = {
  async createNewEvent(input: CreateEventInput) {
    try {

      // Check if the artist exists
      const existingArtist = await getArtistById(input.artist);
      if (!existingArtist) {
        throw new Error("Artist not found");
      }

      const newEvent = await createEvent(input);
      return newEvent;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  async getAllEvents() {
    try {
      return await getAllEvents();
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  async getEventById(eventId: string) {
    try {
      return await getEventById(eventId);
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  async getEventsByArtist(artistId: string) {
    try {

      // Check if the artist exists
      const existingArtist = await getArtistById(artistId);
      if (!existingArtist) {
        throw new Error("Artist not found");
      }
      return await getEventsByArtist(artistId);
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  async updateEvent(eventId: string, input: UpdateEventInput) {
    try {
      return await updateEvent(eventId, input);
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  async deleteEvent(eventId: string) {
    try {
      return await deleteEvent(eventId);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
};

export { eventService };
