import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// ngrx, store and reducers
import { StoreModule, combineReducers } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store';

// router
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { appRoutes } from './routes';

// redux router binding
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { CustomRouterStateSerializer } from './store/router';
import { ThirdPageComponent } from './third-page/third-page.component';

import { SpaceInvaderService } from './shared/space-invaders.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecondPageComponent,
    ThirdPageComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers), // add met reducers here
    StoreDevtoolsModule.instrument(),
    RouterModule.forRoot(appRoutes,
      { enableTracing: true } // debugging purposes only
    ),
    StoreRouterConnectingModule,
    HttpModule
  ],
  providers: [   
   /**
    * The `RouterStateSnapshot` provided by the `Router` is a large complex structure.
    * A custom RouterStateSerializer is used to parse the `RouterStateSnapshot` provided
    * by `@ngrx/router-store` to include only the desired pieces of the snapshot.
    */
{ provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
SpaceInvaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
