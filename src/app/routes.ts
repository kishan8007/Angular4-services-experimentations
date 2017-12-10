import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PromiseExampleComponent } from './promise-example/promise-example.component';
import { FourthPageComponent } from './fourth-page/fourth-page.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'promise-example', component: PromiseExampleComponent },
    { path: 'fourth-page', component: FourthPageComponent }
  ];
