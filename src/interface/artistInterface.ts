export interface CreateArtistInput {
  name: string,
  genre: string,
  bio: string;
  imageUrl: string;
  socialLinks: string[];
}

export interface UpdateArtistInput {
    name?: string;
    genre?: string;
    bio?: string;
    imageUrl?: string;
    socialLinks?: string[];
  }