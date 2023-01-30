import {
  addCategory,
  deleteById,
  editById,
  getById,
  listAllCategory,
} from "../service/category";
import { Request, Response, Express } from "express";
let router: Express = require("express").Router();

router.post("/category", async (req: Request, res: Response) => {
  addCategory(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
router.get("/categories", async (req: Request, res: Response) => {
  listAllCategory()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
router.get("/category/", async (req: Request, res: Response) => {
  getById(req.query.id)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
router.delete("/category/", async (req: Request, res: Response) => {
  deleteById(req.query.id)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
router.patch("/category/", async (req: Request, res: Response) => {
  editById(req.query.id, req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
export default router;
