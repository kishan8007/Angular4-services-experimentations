import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { SpaceInvader } from './space-invader';

@Injectable()
export class SpaceInvaderService {
  spaceInvadersURL: string = '../assets/space_invaders.json';

  constructor(private http: Http) { }

  getSpaceInvaders(): Promise<Array<SpaceInvader>> {
    console.log('getSpaceInvaders(): Promise<Array<SpaceInvader>>');
    return this.http
      .get(this.spaceInvadersURL)
      .toPromise()
      .then((response) => {
        console.log(response);
        return response.json().data as SpaceInvader[];
      })
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
