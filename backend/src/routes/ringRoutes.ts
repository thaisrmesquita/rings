import { Router } from "express";
import RingController from "../controllers/RingController";

const router = Router();

router.post("/rings", RingController.create);
router.get("/rings", RingController.getAll);
router.put("/rings/:id", RingController.update);
router.delete("/rings/:id", RingController.delete);

export default router;
