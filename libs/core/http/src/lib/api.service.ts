import { inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { API_URL } from "./api-url.token";

@Injectable({ providedIn: "root" })
export class ApiService {
  private readonly http = inject(HttpClient)
  private readonly apiUrl = inject(API_URL);

  public get(url: string, params: HttpParams = new HttpParams()) {
    return this.http.get(`${this.apiUrl}${url}`, {
      headers: this.headers,
      params
    })
  }

  private get headers(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    return new HttpHeaders(headersConfig);
  }
}
