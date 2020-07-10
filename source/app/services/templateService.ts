import ReportFactory from "../factory/report-factory/ReportFactory";
import TemplateDataHelper from '../helpers/TemplateDataHelper'
const mustache = require('mustache')

export class TemplateService {
  public static templateManager(report:ReportFactory): any {
    try{
      let data = {}
      const ds = report.ds
      const helper = new TemplateDataHelper();

      const scriptOtus = report.template[0]
      eval(scriptOtus)

      const template = report.template[1]
      return mustache.render(template, {data})
    }catch(e){
      return {error:e}
    }
  }
}