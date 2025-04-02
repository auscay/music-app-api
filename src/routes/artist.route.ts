import express, { Request, Response } from "express";
import { artistController } from "../controller";

const router = express.Router();

// Create Artist
router.post("/create-artist", async (req: Request, res: Response) => {
  try {
    const input = req.body;
    const result = await artistController.createArtist(input);
    res.status(result.success ? 201 : 400).json(result);
  } catch (error: any) {
    console.error("Create artist error", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Get All Artists
router.get("/", async (req: Request, res: Response) => {
  try {
    const result = await artistController.getAllArtists();
    res.status(result.success ? 200 : 400).json(result);
  } catch (error: any) {
    console.error("Fetch artists error", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Get Artist by ID
router.get("/get-artist/:id", async (req: Request, res: Response) => {
  try {
    const result = await artistController.getArtistById(req.params.id);
    res.status(result.success ? 200 : 404).json(result);
  } catch (error: any) {
    console.error("Fetch artist error", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Update Artist
router.put("/update-artist/:id", async (req: Request, res: Response) => {
  try {
    const input = req.body;
    const result = await artistController.updateArtist(req.params.id, input);
    res.status(result.success ? 200 : 404).json(result);
  } catch (error: any) {
    console.error("Update artist error", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Delete Artist
router.delete("/delete-artist/:id", async (req: Request, res: Response) => {
  try {
    const result = await artistController.deleteArtist(req.params.id);
    res.status(result.success ? 200 : 404).json(result);
  } catch (error: any) {
    console.error("Delete artist error", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

export { router as artistRoutes };
