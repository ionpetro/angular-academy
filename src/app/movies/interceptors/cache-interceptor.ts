import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { CacheService } from '../cache.service';


@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  constructor(private cacheService: CacheService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    // extend server response observable with logging
    return next.handle(req);
  }
}
