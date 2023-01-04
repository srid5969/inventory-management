import {
    addBrand,
  deleteById,
  editById,
  getById,
  listAllBrands,
} from "../service/brands";
import { Request, Response, Express } from "express";
let router: Express = require("express").Router();

router.post("/brand", async (req: Request, res: Response) => {
    addBrand(req.body).then((data) => res.json(data));
  });
router.get("/brands", async (req: Request, res: Response) => {
  listAllBrands().then((data) => res.json(data));
});
router.get("/brand/", async (req: Request, res: Response) => {
  getById(req.query.id).then((data) => res.json(data));
});
router.delete("/brand/", async (req: Request, res: Response) => {
  deleteById(req.query.id).then((data) => res.json(data));
});
router.patch("/brand/", async (req: Request, res: Response) => {
  editById(req.query.id, req.body).then((data) => res.json(data));
});
export default router