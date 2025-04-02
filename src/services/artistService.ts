import { CreateArtistInput, UpdateArtistInput } from "../interface";
import {
  createArtist,
  getArtists,
  getArtistById,
  updateArtist,
  deleteArtist
} from "../repository";

const artistService = {
  async createNewArtist(input: CreateArtistInput) {
    const { name, genre, bio, imageUrl, socialLinks } = input;
    try {
      return await createArtist(name, genre, bio, imageUrl, socialLinks);
    } catch (error: any) {
      throw new Error(error.message || "Failed to create artist");
    }
  },

  async getAllArtists() {
    try {
      return await getArtists();
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch artists");
    }
  },

  async getArtistById(id: string) {
    try {
      return await getArtistById(id);
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch artist");
    }
  },

  async updateArtist(id: string, input: UpdateArtistInput) {
    try {
      return await updateArtist(id, input);
    } catch (error: any) {
      throw new Error(error.message || "Failed to update artist");
    }
  },

  async deleteArtist(id: string) {
    try {
      return await deleteArtist(id);
    } catch (error: any) {
      throw new Error(error.message || "Failed to delete artist");
    }
  }
};

export { artistService };
