import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as backends from './backend-api';
import { map, Observable } from 'rxjs';
import { GiphyParam } from '../models/giphys/giphys.model';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(
        private http: HttpClient
    ) { }

    getAllTrendingGifs(data?: GiphyParam): Observable<any> {
        let param = new HttpParams();

        if (data?.offset) {
            param = param.append('offset', data.offset);
        }
        
        if (data?.rating) {
            param = param.append('rating', data.rating);
        }

        if (data?.limit) {
            param = param.append('limit', data.limit);
        }

        return this.http.get<any>(backends.getAllTrendingGifsApi, { params: param }).pipe(
            map(data => {
                return data;
            })
        )
    }
    getDetailItemGifs(id: string): Observable<any> {
        let param = new HttpParams();

        param = param.append('ID', id);

        return this.http.get<any>(backends.getGifByIDApi, { params: param }).pipe(
            map(data => {
                return data;
            })
        )
    }

    getSearchItemGifs(data?: GiphyParam): Observable<any> {
        let param = new HttpParams();

        if (data?.query) {
            param = param.append('q', data.query);
        }

        if (data?.limit) {
            param = param.append('limit', data.limit);
        }

        if (data?.offset) {
            param = param.append('offset', data.offset);
        }

        if (data?.rating) {
            param = param.append('rating', data.rating);
        }

        if (data?.lang) {
            param = param.append('lang', data.lang);
        }

        return this.http.get<any>(backends.getSearchGifsApi, { params: param }).pipe(
            map(data => {
                return data;
            })
        )
    }
}
