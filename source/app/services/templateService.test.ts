import {TemplateService} from "./templateService"
import ReportFactory from "../factory/report-factory/ReportFactory";
import {reportMock} from "../test/mocks/reportMock";

describe("templateService test",()=>{
  const templateService = TemplateService
  it("templateManager should return a template string", () => {
    const report = new ReportFactory(reportMock)
    const template = templateService.templateManager(report)
    expect(template).toEqual("<div>Fulano Detal</div>")
  })
})