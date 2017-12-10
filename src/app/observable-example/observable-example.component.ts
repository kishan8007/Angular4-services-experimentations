import { SpaceInvader } from './../shared/space-invader';
import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../shared/observable.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrls: ['./observable-example.component.css']
})
export class ObservableExampleComponent implements OnInit {
  spaceInvaders: SpaceInvader[] = [];
  spaceObservables: Observable<SpaceInvader[]>;

  constructor(private observableService: ObservableService) { }

  ngOnInit() {
    //
    this.observableService.getData()
    .subscribe(
        resultArray => this.spaceInvaders = resultArray,
        error => console.log("Error :: " + error)
    );

    //
    this.spaceObservables = this.observableService.getData();
  }

}
