import express, {Request, Response} from "express";
import ReportController from "../controllers/ReportsController";


export default class ReportsRouter {
  public static initialize(app: express.Application) {
    let basePath: string = "/report";

    app.post(basePath, async (req: Request, res: Response) => {
      let json: any;
      try {
        let result = await ReportController.f();
        res.status(result.code).send(result.body);
      } catch (err) {
        res.status(err.code).send(err.body)
      }
    });
  }
};