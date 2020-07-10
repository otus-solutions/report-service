export default interface IResponse {
  code: number;
  body: object;
}

export class SuccessResponse implements IResponse{
  constructor(body: any = true){
    this.code = 200;
    this.body = {data: body};
    return this;
  }

  body: object;
  code: number;
}
export class NotAcceptableResponse implements IResponse{
  constructor(body: object = {message: "Value not acceptable"}){
    this.code = 406;
    this.body = {data: body};
    return this;
  }

  body: object;
  code: number;
}
export class InternalServerErrorResponse implements IResponse{
  constructor(body: object = {message: "There was an error. Please try again later."}){
    this.code = 500;
    this.body = {data: body};
    return this;
  }

  body: object;
  code: number;
}

export class NotFoundResponse implements IResponse{
  constructor(body: object = {message: "Data not found"}){
    this.code = 404;
    this.body = {data: body};
    return this;
  }

  body: object;
  code: number;
}

