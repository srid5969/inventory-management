import { Request, Response, Express } from "express";
let router:Express = require("express").Router();
import {addProducts} from "../service/purchasedProducts";


router.post("/purchase/products", async (req:Request,res:Response)=>{
    addProducts(req.body,req.query.id).then(data=>res.send(data)).catch(data=>res.send(data))
})
export default router