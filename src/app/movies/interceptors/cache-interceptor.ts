import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { CacheService } from '../cache.service';
import { tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  constructor(private cacheService: CacheService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    // this interceptor should work only for GET requests on actors
    if (!this.isCacheable(req)) {return next.handle(req)}

    const cachedResponse = this.cacheService.get(req);
    return cachedResponse ?
      of(cachedResponse) : this.sendRequest(req, next);

  }

  isCacheable(req: HttpRequest<any>) {
    return req.url.startsWith('api/actors')
  }

  sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {
  
  
    return next.handle(req).pipe(
      tap(event => {
        // There may be other events besides the response.
        if (event instanceof HttpResponse) {
          this.cacheService.put(req, event); // Update the cache.
        }
        
      })
    );
  }
}
