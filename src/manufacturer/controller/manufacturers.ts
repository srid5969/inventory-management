import {
  deleteManufacturer,
  editManufacturer,
  getAllManufacturersDetail,
  getAManufacturer,
  registerManufacturer,
} from "../service/manufacturers";
import { Request, Response, Express } from "express";
let router: Express = require("express").Router();
router.get("/manufacturers", async (req: Request, res: Response) => {
  getAllManufacturersDetail()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
router.post("/manufacturer", async (req: Request, res: Response) => {
  registerManufacturer(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(err.status || 500).json(err));
});
router.patch("/manufacturer/", async (req: Request, res: Response) => {
  editManufacturer(req.query.id, req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
router.get("/manufacturer/", async (req: Request, res: Response) => {
  getAManufacturer(req.query.id)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
router.delete("/manufacturer/", async (req: Request, res: Response) => {
  deleteManufacturer(req.query.id)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
export default router;
