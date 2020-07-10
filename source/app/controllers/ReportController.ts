import {Request, Response} from "express";
import ReportFactory from "../factory/report-factory/ReportFactory";
import {TemplateService} from "../services/templateService";

class ReportController {
  public async getTemplate(req: Request, res: Response){
    try{
      const report = new ReportFactory(req.body)
      const template = TemplateService.templateManager(report)
      if (template.error)
        return res.status(500).send({error: "template send error"})
      res.status(200).json({data: TemplateService.templateManager(report)})
    } catch (e) {
      res.status(e.status).send({error: e.body});
    }
  }
}
export default new ReportController()
