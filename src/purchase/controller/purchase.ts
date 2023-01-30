import { Request, Response, Express } from "express";
import { getInvoiceForInward } from "../service/invoice";
let router: Express = require("express").Router();
import { addPurchase, afterClickingTheSubmitButton, purchaseList } from "../service/purchase";
router.post("/purchase", async (req: Request, res: Response) => {
  addPurchase(req.body)
  .then((data) => res.send(data))
  .catch((err) => res.json(err));
});
router.get("/purchases", async (req: Request, res: Response) => {
  purchaseList()
    .then((data) => res.send(data))
    .catch((data) => res.send(data));
});
router.post("/purchases/added/submit/", async (req: Request, res: Response) => {
  afterClickingTheSubmitButton(req.query.id)
    .then((data) => {res.send(data)})
    .catch((data) => res.send(data));
});
router.get("/inward/invoice", async (req: Request, res: Response) => {
  getInvoiceForInward(req.query.id)
    .then((data) => res.send(data))
    .catch((data) => res.send(data));
});
export default router;
