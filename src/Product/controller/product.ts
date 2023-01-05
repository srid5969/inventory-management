import { Request, Response, Express } from "express";
import { editById } from "src/brand/service/brands";
import { addProduct, deleteAProduct, editProductById, getAllProduct, getAProduct } from "../service/product";
let router: Express = require("express").Router();
router.get("/products", async (req: Request, res: Response) => {
    getAllProduct().then((data) => res.json(data));
});
router.get("/product/", async (req: Request, res: Response) => {
    getAProduct(req.query.id).then((data) => res.json(data));
});
router.patch("/product/", async (req: Request, res: Response) => {
    editProductById(req.query.id,req.body).then((data) => res.json(data));
});
router.delete("/product/", async (req: Request, res: Response) => {
    deleteAProduct(req.query.id).then((data) => res.json(data));
});
router.post("/product", async (req: Request, res: Response) => {
    addProduct(req.body).then((data) => res.json(data));
});
export default router