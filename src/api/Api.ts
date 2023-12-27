import { HTTPTransport } from '@/core/HttpTransport';
import { ENDPOINTS } from '@/types/endpoints';

export abstract class API {
  protected http: HTTPTransport;
  protected constructor(endpoint: ENDPOINTS) {
    this.http = new HTTPTransport(endpoint);
  }
}
