import { EventModel } from "../database/models/";
import { CreateEventInput, UpdateEventInput } from "../interface";

export const createEvent = async (input: CreateEventInput) => {
  try {
    const newEvent = new EventModel(input);
    return await newEvent.save();
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getAllEvents = async () => {
  try {
    return await EventModel.find().populate("artist"); // Populate artist details
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getEventById = async (eventId: string) => {
  try {
    return await EventModel.findById(eventId).populate("artist");
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getEventsByArtist = async (artistId: string) => {
  try {
    return await EventModel.find({ artist: artistId }).populate("artist");
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const updateEvent = async (eventId: string, input: UpdateEventInput) => {
  try {
    return await EventModel.findByIdAndUpdate(eventId, input, { new: true }).populate("artist");
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const deleteEvent = async (eventId: string) => {
  try {
    return await EventModel.findByIdAndDelete(eventId);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
