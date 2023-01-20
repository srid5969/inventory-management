import { Request, Response, Express } from "express";
import { getInvoiceForInward } from "../service/invoice";
let router: Express = require("express").Router();
import { addPurchase, purchaseList } from "../service/purchase";
router.post("/purchase", async (req: Request, res: Response) => {
  addPurchase(req.body)
    .then((data) => res.send(data))
    .catch((data) => res.send(data));
});
router.get("/purchases", async (req: Request, res: Response) => {
  purchaseList()
    .then((data) => res.send(data))
    .catch((data) => res.send(data));
});
router.get("/purchases", async (req: Request, res: Response) => {
  purchaseList()
    .then((data) => res.send(data))
    .catch((data) => res.send(data));
});
router.get("/invoice", async (req: Request, res: Response) => {
  getInvoiceForInward(req.query.id)
    .then((data) => res.send(data))
    .catch((data) => res.send(data));
});
export default router;
