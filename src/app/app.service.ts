import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable()
export class HttpService {
    baseURL = environment.API_URL;
    constructor(private http: HttpClient) { }

    get(url: string) {
        return this.http.get(this.baseURL + url);
    }

    post(url: string, data: any) {
        return this.http.post(this.baseURL + url, data);
    }
}