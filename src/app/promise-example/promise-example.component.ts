import { Component, OnInit } from '@angular/core';
import { PromiseService } from '../shared/promise.service';
import { SpaceInvader } from '../shared/space-invader';


@Component({
  selector: 'app-promise-example',
  templateUrl: './promise-example.component.html',
  styleUrls: ['./promise-example.component.css']
})
export class PromiseExampleComponent implements OnInit {
  spaceInvaders: SpaceInvader[];
  spaceInvadersPromise: Promise<SpaceInvader[]>;
  error: any;

  constructor( private promiseService: PromiseService ) { }

  ngOnInit() {
    this.getSpaceInvaders();
    console.log(this.spaceInvaders); // 

    this.spaceInvadersPromise = this.promiseService.getSpaceInvaders();

  }

  getSpaceInvaders(): void {
    this.promiseService
      .getSpaceInvaders()
      .then(spaceInvaders => {this.spaceInvaders = spaceInvaders})
      .catch(error => this.error = error);
  }
}
