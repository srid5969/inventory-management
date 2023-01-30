import { Request, Response, Express } from "express";
let router: Express = require("express").Router();
import {
  addVendor,
  deleteVendorById,
  editById,
  getVentorById,
  listAllVendors,
} from "../service/ventory";

router.post("/vendor", async (req: Request, res: Response) => {
  addVendor(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
router.get("/vendors", async (req: Request, res: Response) => {
  listAllVendors()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
router.get("/vendor/", async (req: Request, res: Response) => {
  getVentorById(req.query.id)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
router.delete("/vendor/", async (req: Request, res: Response) => {
  deleteVendorById(req.query.id)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
router.patch("/vendor/", async (req: Request, res: Response) => {
  editById(req.query.id, req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
export default router;
