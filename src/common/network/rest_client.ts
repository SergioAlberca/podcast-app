import type { AxiosInstance, AxiosResponse } from "axios";
import axios from "axios";

export class RestClient {
  private client: AxiosInstance;
  constructor() {
    this.client = axios.create({
      timeout: 10000
    });
  }

  async get<T>(url: string): Promise<AxiosResponse<T>> {
    return await this.client.get<T>(url);
  }
}
