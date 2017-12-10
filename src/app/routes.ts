import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PromiseExampleComponent } from './promise-example/promise-example.component';
import { ObservableExampleComponent } from './observable-example/observable-example.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'promise-example', component: PromiseExampleComponent },
    { path: 'observable-example', component: ObservableExampleComponent }
  ];
