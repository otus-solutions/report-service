import IResponse from '../utils/response';
import ReportService from "../services/ReportsService";

export default class ReportsController {

  static async f(): Promise<IResponse> {
    return ReportService.f();
  }

};