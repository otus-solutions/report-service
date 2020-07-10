import ActivityDatasourceManager from '../activityManager/ActivityManager'

class ReportFactory {

  public label: string
  public ds: {}
  public template: any[]

  constructor(report: any) {
    try{
      this.label = report.label
      this.ds = {};
      this.template = report.template
      this.templateStringManager(report.template)
      this.dataManager(report.dataSources)
    }catch(e){
      return e
    }
  }

  private templateStringManager(template:string){
    const templateSplit = template.split("</otus-script>");
    const otusScriptAndMustashTreatment = templateSplit[0].replace(/<otus-script>|{{/g, "");
    const otusScriptmustashForComma = otusScriptAndMustashTreatment.replace(/}}/g, ";")
    const otusScriptQuotationForSimple = otusScriptmustashForComma.replace(/["]/g,"'")
    const otusScriptnoSpaces = otusScriptQuotationForSimple.replace(/\s/g, "")
    this.template = [otusScriptnoSpaces, templateSplit[1]]
  }

  private dataManager(dataSource: any[]){
    dataSource.forEach(dataItem => {
      this.manage(dataItem);
      if(dataItem.result[0]){
        //@ts-ignore
        this.ds[dataItem.key] = dataItem.result;
      }
    })
  }

  private manage(ds:any) {
    switch (ds.dataSource) {
      case 'Activity':
        let managers = ds.result.map((item:any) => {
          if (item) {
            return new ActivityDatasourceManager(item);
          }
          return null;
        });
        ds.result = managers;
        break;
    }
    return ds;
  }
}
export default ReportFactory;