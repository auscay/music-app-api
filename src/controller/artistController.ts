import { CreateArtistInput, UpdateArtistInput } from "../interface";
import { artistService } from "../services";

const artistController = {
  // Create Artist
  async createArtist(input: CreateArtistInput) {
    try {
      const newArtist = await artistService.createNewArtist(input);
      return { success: true, data: newArtist };
    } catch (error: any) {
      return { success: false, message: error.message };
    }
  },

  // Get All Artists
  async getAllArtists() {
    try {
      const artists = await artistService.getAllArtists();
      return { success: true, data: artists };
    } catch (error: any) {
      return { success: false, message: error.message };
    }
  },

  // Get Artist by ID
  async getArtistById(id: string) {
    try {
      const artist = await artistService.getArtistById(id);
      if (!artist) return { success: false, message: "Artist not found" };
      return { success: true, data: artist };
    } catch (error: any) {
      return { success: false, message: error.message };
    }
  },

  // Update Artist
  async updateArtist(id: string, input: UpdateArtistInput) {
    try {
      const updatedArtist = await artistService.updateArtist(id, input);
      if (!updatedArtist) return { success: false, message: "Artist not found" };
      return { success: true, data: updatedArtist };
    } catch (error: any) {
      return { success: false, message: error.message };
    }
  },

  // Delete Artist
  async deleteArtist(id: string) {
    try {
      const deletedArtist = await artistService.deleteArtist(id);
      if (!deletedArtist) return { success: false, message: "Artist not found" };
      return { success: true, message: "Artist deleted successfully" };
    } catch (error: any) {
      return { success: false, message: error.message };
    }
  }
};

export { artistController };
