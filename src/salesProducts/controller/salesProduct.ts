import { Request, Response, Express } from "express";
let router: Express = require("express").Router();
import { addSalesProduct } from "../service/salesProduct";

router.post("/sales/products", async (req: Request, res: Response) => {
    addSalesProduct(req.body,req.query.id).then(data=>res.send(data)).catch(err=>res.send(err))
});
export default router