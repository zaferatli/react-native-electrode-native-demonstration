// @flow

export default class MoviesRequests {
  constructor(bridge) {
    this._bridge = bridge;
  }

  closeMobıleApp(timeout: number): Promise<any> {
    return this._bridge.sendRequest('com.mobile.app.request.close', {
      timeout,
    });
  }
}
