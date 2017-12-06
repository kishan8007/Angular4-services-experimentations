import { Component, OnInit } from '@angular/core';
import { SpaceInvaderService } from '../shared/space-invaders.service';
import { SpaceInvader } from '../shared/space-invader';


@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {
  spaceInvaders: SpaceInvader[];
  error: any;
  test: string = 'sfdsfs';

  constructor(
    private spaceInvaderService: SpaceInvaderService) { }


  ngOnInit() {
    this.getSpaceInvaders();
    console.log(this.spaceInvaders);
    console.log(this.test);
  }

  getSpaceInvaders(): void {
    this.spaceInvaderService
      .getSpaceInvaders()
      .then(spaceInvaders => {this.spaceInvaders = spaceInvaders; console.log(spaceInvaders);})
      .catch(error => this.error = error);
  }
}
