import App from './app'

describe("app test", () => {

  it("app should return values", () => {
    expect(App.get("view engine")).toEqual('html');
    expect(App.get("API_PORT")).toEqual(process.env.API_PORT);
  })
})