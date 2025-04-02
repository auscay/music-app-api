export interface CreateEventInput {
    title: string;
    description: string;
    date: Date;
    location: string;
    artist: string; // Reference to Artist ID
    ticketPrice: number;
    ticketsAvailable: number;
  }
  
  export interface UpdateEventInput {
    title?: string;
    description?: string;
    date?: Date;
    location?: string;
    ticketPrice?: number;
    ticketsAvailable?: number;
  }
  