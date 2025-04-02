import express, { Request, Response } from "express";
import { eventController } from "../controller";

const router = express.Router();

// Create a new event
router.post("/create-event", async (req: Request, res: Response) => {
  try {
    const input = req.body;
    const result = await eventController.createEvent(input);

    res.status(result.success ? 201 : 400).json(result);
  } catch (error: any) {
    console.error("Create event error", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Get all events
router.get("/", async (_req: Request, res: Response) => {
  try {
    const result = await eventController.getAllEvents();
    res.status(result.success ? 201 : 400).json(result);
  } catch (error: any) {
    console.error("Get events error", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Get a specific event by ID
router.get("/:eventId", async (req: Request, res: Response) => {
  try {
    const { eventId } = req.params;
    const result = await eventController.getEventById(eventId);
    res.status(result.success ? 201 : 400).json(result);
  } catch (error: any) {
    console.error("Get event error", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Get all events by a specific artist
router.get("/artist/:artistId", async (req: Request, res: Response) => {
  try {
    const { artistId } = req.params;
    const result = await eventController.getEventsByArtist(artistId);
    res.status(result.success ? 201 : 400).json(result);
  } catch (error: any) {
    console.error("Get artist events error", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Update an event
router.put("/:eventId", async (req: Request, res: Response) => {
  try {
    const { eventId } = req.params;
    const input = req.body;
    const result = await eventController.updateEvent(eventId, input);
    res.status(result.success ? 201 : 400).json(result);
  } catch (error: any) {
    console.error("Update event error", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Delete an event
router.delete("/:eventId", async (req: Request, res: Response) => {
  try {
    const { eventId } = req.params;
    const result = await eventController.deleteEvent(eventId);
    res.status(result.success ? 201 : 400).json(result);
  } catch (error: any) {
    console.error("Delete event error", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

export { router as eventRoutes };
