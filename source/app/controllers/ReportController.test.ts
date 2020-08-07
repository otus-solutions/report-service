import ReportController from './ReportController'
import Request from "supertest";
import {reportMock} from "../test/mocks/reportMock";
import App from '../../config/app'

describe("ReportController test", () => {
  it("getTemplate should return a template string", async() => {
    const response = await Request(App)
      .post("/report")
      .send(reportMock)
    expect(response.status).toBe(200)
    expect(response.body).toEqual({data:"<div>Fulano Detal</div>"})
  })
})