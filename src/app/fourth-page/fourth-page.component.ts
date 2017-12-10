import { SpaceInvader } from './../shared/space-invader';
import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../shared/observable.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-fourth-page',
  templateUrl: './fourth-page.component.html',
  styleUrls: ['./fourth-page.component.css']
})
export class FourthPageComponent implements OnInit {
  spaceObservables: SpaceInvader[] = [];
  spaceObservables2: Observable<SpaceInvader[]>;

  constructor(private observableService: ObservableService) { }

  ngOnInit() {
    //
    this.observableService.getData()
    .subscribe(
        resultArray => this.spaceObservables = resultArray,
        error => console.log("Error :: " + error)
    );

    //
    this.spaceObservables2 = this.observableService.getData();
  }

}
