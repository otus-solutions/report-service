import TemplateDataHelper from "./TemplateDataHelper";

describe("templateDataHelper tests", () => {
  const templateDataHelper = new TemplateDataHelper()

  it("formatDate should return a new date format", () => {
    const dateMock = "2017-09-26T15:39:32.582Z"
    const dateTemplate = templateDataHelper.formatDate(dateMock)
    expect(dateTemplate).toEqual("26-9-2017")
  })

  it("getObjectByArray shuold return an object from an array", () => {
    expect(templateDataHelper
      .getObjectByArray(examMock, 'resultName', 'HEMOGLOBINA GLICADA-HBA1C...............:'))
      .toEqual(examMock[0])
  })
  const examMock: any = [{
      "examSendingLotId": "5b0475ea40181911a4d2eda8",
      "examId": "5b0475ea40181911a4d2eda9",
      "_id": "5b0475eb40181911a4d2f07c",
      "objectType": "ExamResults",
      "code": null,
      "examName": "HEMOGLOBINA GLICADA - SANGUE",
      "resultName": "HEMOGLOBINA GLICADA-HBA1C...............:",
      "value": "6.0",
      "isValid": true,
      "releaseDate": "2018-03-29T11:14:00.000Z",
      "observations": [],
      "fieldCenter": null,
      "recruitmentNumber": 5555563,
      "sex": "F",
      "birthdate": {
        "objectType": "ImmutableDate",
        "value": "1930-06-01 00:00:00.000"
      }
    }]
})