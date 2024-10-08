import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },  // Redirige a Home
    { path: 'home', component: HomeComponent },
];
