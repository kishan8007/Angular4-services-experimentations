import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'second-page', component: SecondPageComponent },
    { path: 'third-page', component: ThirdPageComponent }
  ];
