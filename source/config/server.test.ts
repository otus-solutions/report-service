import App from './app'
import Server from './server'

describe("server listen func", () => {
  const appService = App

  it('server should init by app and call endpoints method', async() => {
    const appSpy = spyOn(appService, "listen")
    const listSpy = spyOn(Server, "endpointsList")

    Server.listen()
    expect(appSpy).toBeCalledTimes(1)
    expect(listSpy).toBeCalledTimes(1)
  })

});