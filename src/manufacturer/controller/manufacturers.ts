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
  getAllManufacturersDetail().then((data) => res.json(data));
});
router.post("/manufacturer", async (req: Request, res: Response) => {
  registerManufacturer(req.body).then((data) => res.json(data));
});
router.patch("/manufacturer/", async (req: Request, res: Response) => {
  editManufacturer(req.params.id, req.body).then((data) => res.json(data));
});
router.get("/manufacturer/", async (req: Request, res: Response) => {
  getAManufacturer(req.params.id).then((data) => res.json(data));
});
router.delete("/manufacturer/", async (req: Request, res: Response) => {
  deleteManufacturer(req.params.id).then((data) => res.json(data));
});
export default router;
