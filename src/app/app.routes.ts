import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ContactComponent} from './contact/contact.component';

export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },  // Redirige a Home
    { path: 'home', component: HomeComponent },
    { path: 'contacto', component: ContactComponent },
];
