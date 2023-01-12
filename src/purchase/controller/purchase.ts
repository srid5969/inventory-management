import { Request, Response, Express } from "express";
let router:Express = require("express").Router();
import {addPurchase, purchaseList} from "../service/purchase";

router.post("/purchase", async (req:Request,res:Response)=>{
    addPurchase(req.body).then(data=>res.send(data)).catch(data=>res.send(data))
})
router.get("/purchases", async (req:Request,res:Response)=>{
    purchaseList().then(data=>res.send(data)).catch(data=>res.send(data))
})
export default router