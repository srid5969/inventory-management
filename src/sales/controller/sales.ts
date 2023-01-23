import { Request, Response, Express } from "express";
let router: Express = require("express").Router();
import {addSalesPre} from "../service/sales";


router.post("/sales",async(req:Request|any,res:Response)=>{
    req.body.postedBy=req.user
addSalesPre(req.body).then(data=>res.send(data)).catch(data=>res.send(data))
})