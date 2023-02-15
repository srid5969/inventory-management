import { Request, Response, Express } from "express";
import { getReportForInward, getReportForSales } from "../service/report";
let router: Express = require("express").Router();
router.get("/purchase/report", async (req: Request, res: Response) => {
    getReportForInward(req.query.id)
      .then((data) => res.send(data))
      .catch((data) => res.send(data));
  });
  router.get("/sale/report", async (req: Request, res: Response) => {
    getReportForSales(req.query.id)
      .then((data) => res.send(data))
      .catch((data) => res.send(data));
  });
  export default router