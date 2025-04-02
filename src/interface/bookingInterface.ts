export interface CreateBookingInput {
    eventId: string;
    customerName: string;
    customerEmail: string;
    ticketCount: number;
  }
  
  export interface UpdateBookingStatusInput {
    status: "Pending" | "Confirmed" | "Cancelled";
  }
  