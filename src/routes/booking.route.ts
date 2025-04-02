import express, { Request, Response } from "express";
import { bookingController } from "../controller";

const router = express.Router();

// Create a new booking
router.post("/create", async (req: Request, res: Response) => {
  const result = await bookingController.createBooking(req.body);
  res.status(result.success ? 201 : 400).json(result);
});

// Get all bookings
router.get("/", async (_req: Request, res: Response) => {
  const result = await bookingController.getAllBookings();
  res.status(result.success ? 200 : 500).json(result);
});

// Get booking by ID
router.get("/:id", async (req: Request, res: Response) => {
  const result = await bookingController.getBookingById(req.params.id);
  res.status(result.success ? 200 : 404).json(result);
});

// Get bookings for a specific event
router.get("/event/:eventId", async (req: Request, res: Response) => {
  const result = await bookingController.getBookingsByEvent(req.params.eventId);
  res.status(result.success ? 200 : 400).json(result);
});

// Update booking status
router.patch("/:id/status", async (req: Request, res: Response) => {
  const result = await bookingController.updateBookingStatus(req.params.id, req.body);
  res.status(result.success ? 200 : 400).json(result);
});

// Delete a booking
router.delete("/:id", async (req: Request, res: Response) => {
  const result = await bookingController.deleteBooking(req.params.id);
  res.status(result.success ? 200 : 404).json(result);
});

export { router as bookingRoutes };
