import { Request, Response, Express } from "express";
import {
  addProduct,
  deleteAProduct,
  editProductById,
  getAllProduct,
  getAProduct,
} from "../service/product";
let router: Express = require("express").Router();
router.get("/products", async (req: Request, res: Response) => {
  getAllProduct()
    .then((data) => res.send(data))
    .catch((err) => res.json(err));
});
router.get("/product/", async (req: Request, res: Response) => {
  getAProduct(req.query.id)
    .then((data) => res.send(data))
    .catch((err) => res.json(err));
});
router.patch("/product/", async (req: Request, res: Response) => {
  editProductById(req.query.id, req.body)
    .then((data) => res.send(data))
    .catch((err) => res.json(err));
});
router.delete("/product/", async (req: Request, res: Response) => {
  deleteAProduct(req.query.id)
    .then((data) => res.send(data))
    .catch((err) => res.json(err));
});//send(err)
router.post("/product", async (req: Request, res: Response) => {
  addProduct(req.body)
    .then((data) => res.send(data))
    .catch((err) => res.json(err));
});
export default router;
