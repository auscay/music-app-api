import { ArtistModel } from "../database/models";
import { UpdateArtistInput } from "../interface";

// Create Artist
export const createArtist = async (
  name: string,
  genre: string,
  bio?: string,
  imageUrl?: string,
  socialLinks?: string[]
) => {
  try {
    const newArtist = new ArtistModel({ name, genre, bio, imageUrl, socialLinks });
    return await newArtist.save();
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Get All Artists
export const getArtists = async () => {
  try {
    return await ArtistModel.find();
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Get Artist by ID
export const getArtistById = async (id: string) => {
  try {
    return await ArtistModel.findById(id);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Update Artist
export const updateArtist = async (id: string, input: UpdateArtistInput) => {
  try {
    return await ArtistModel.findByIdAndUpdate(id, input, { new: true });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Delete Artist
export const deleteArtist = async (id: string) => {
  try {
    return await ArtistModel.findByIdAndDelete(id);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
