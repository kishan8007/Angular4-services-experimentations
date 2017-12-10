import { SpaceInvader } from './../shared/space-invader';
import { Component, OnInit } from '@angular/core';
import { SpaceObservablesService } from '../shared/space-observables.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-fourth-page',
  templateUrl: './fourth-page.component.html',
  styleUrls: ['./fourth-page.component.css']
})
export class FourthPageComponent implements OnInit {
  spaceObservables: SpaceInvader[] = [];
  spaceObservables2: Observable<SpaceInvader[]>;

  constructor(private spaceObservablesService: SpaceObservablesService,
    private spaceObservablesService2: SpaceObservablesService) { }

  ngOnInit() {
    this.spaceObservablesService.getData()
    .subscribe(
        resultArray => this.spaceObservables = resultArray,
        error => console.log("Error :: " + error)
    );


    this.spaceObservables2 = this.spaceObservablesService.getData2();
    console.log(this.spaceObservables2);
  }

}
