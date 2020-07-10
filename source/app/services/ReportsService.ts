import IResponse, {SuccessResponse} from "../utils/response";

export default class ReportService {
  static async f(): Promise<IResponse> {
    return new SuccessResponse()
  }
};
