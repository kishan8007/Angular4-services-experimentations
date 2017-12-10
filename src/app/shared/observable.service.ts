import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { SpaceInvader } from './../shared/space-invader';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";
import { Http, Response } from "@angular/http";

@Injectable()
export class ObservableService {

  constructor(private http: Http) { }
  result: SpaceInvader[];

  getData(): Observable<SpaceInvader[]> { 
    // Set the callback property to 'callback' in your request URL
    const type: string = 'space_invaders';
    const url: string = `../assets/${type}.json`;

    return this.http
        .get(url)
        .map((res: Response) => { 
          return <SpaceInvader[]>res.json().data || {}; 
        })
        .catch(function(error: any){return Observable.throw(error);
      });
  }

}
