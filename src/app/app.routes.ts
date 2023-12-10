import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ProfilComponent } from './Pages/profil/profil.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profil', component: ProfilComponent },
];
