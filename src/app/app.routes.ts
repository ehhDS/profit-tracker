import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {FrontPageComponent} from './front-page/front-page.component';

export const routes: Routes = [
  {
    path: '',
    component:FrontPageComponent,
  }
];
