import { Schema, Document, model } from 'mongoose';

export interface IArtist extends Document {
  name: string;
  genre: string;
  bio: string;
  imageUrl: string;
  socialLinks: string[];
}

const artistSchema = new Schema<IArtist>({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  bio: { type: String, required: true },
  imageUrl: { type: String, required: true },
  socialLinks: [{ type: String }],
},
{
  timestamps: true,
}
);

export const ArtistModel = model<IArtist>('Artist', artistSchema);