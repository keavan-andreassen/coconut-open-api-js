import { AxiosInstance } from 'axios';

import { Resource } from '../index';

export default class Timezone implements Resource {
  protected client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  public async get(): Promise<any> {
    return await this.client.get('timezones');
  }
}
