import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() { }

  // The Map has the following structure
  // {"api/actors/id" -> {response}, "api/actors/id" -> {response}, ...}
  cache = new Map();
  // cache = []
  
  get(req: HttpRequest<any>): HttpResponse<any> | undefined {
    const url = req.urlWithParams;
    const cached: HttpResponse<any> = this.cache.get(url);

    if (!cached) {
      return undefined
    }

    return cached;
  }

  put(req: HttpRequest<any>, res: HttpResponse<any>) {
    this.cache.set(req.urlWithParams, res)
    console.log(this.cache);
  }

}
