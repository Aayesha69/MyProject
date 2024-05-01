import { Routes } from '@angular/router';
import { FirstComponent } from './mycomponents/first/first.component';
import { SecondComponent } from './mycomponents/second/second.component';

export const routes: Routes = [
    {path:'first',component:FirstComponent},
    {path:'second',component:SecondComponent}
];
