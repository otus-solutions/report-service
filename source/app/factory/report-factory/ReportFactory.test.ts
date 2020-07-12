import ReportFactory from "./ReportFactory";

describe("ReportFactory tests", () => {
  const reportFactory = ReportFactory
  it("ReportFactory should create an new object", ()=>{
    const reportObjectMock = {
      label: "ok",
      dataSources: [{dataSource: "Participant", key: "Participant", result: [{}]}],
      template: "<otus-script></otus-script><div>template</div>",
    }
    const report = new ReportFactory(reportObjectMock)
    expect(report).toEqual({"ds": {"Participant": [{}]}, "label": "ok", "template": ["", "<div>template</div>"]})
  })
})