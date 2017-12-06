# AngularReduxRouterTrial

This a trial project. The aim is to implement a basic web app with Angular 4,
Redux (NgRx), (@Angular)Router and make it as complete and robust as possible.

It should implement as much as possible of good practice, debuging tools and
allow lazy-loading.

**vincentperrin.com**


## Technical notes

This project was generated with Angular CLI. Run `npm install -g angular-cli`
to install it if necessary.

Run `npm install` for the setup.

Run `ng serve` to start the server server, and navigate to `http://localhost:4200/`. 


## How this project was built

### Application base

    ng new angular-redux-router-trial


### Fixing package issues

    npm install @angular-devkit/schematics@0.0.34 // For Angular-CLI (if npm warning)

Security issue with handlebars < 4.0.0: removed node_modules and upgraded Angular-CLI

    npm install --save-dev @angular/cli@1.5.3
    npm install
    npm install webpack --save-dev


### Redux (NgRx)

    npm install @ngrx/store --save
    npm install @ngrx/store-devtools --save


###  Router

    npm install @angular/router --save


### Router - store binding

    npm install @ngrx/router-store --save


## Next

ngrx store freeze, why is it necessary?

check route guards

use ngrx effects


## Sources

* https://github.com/ngrx/platform


Let's build an observable data serrvice:
ng generate component third-page
ng generate module data-display
ng generate service shared/space-invaders --module data-display
