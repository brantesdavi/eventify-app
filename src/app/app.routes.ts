import { Routes } from '@angular/router';
import { NewEventComponent } from './pages/new-event/new-event.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'evento/criar', component: NewEventComponent },
];
