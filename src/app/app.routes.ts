import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Download } from './pages/download/download';

export const routes: Routes = [
  { path: '', component: Home }, // home page
  { path: 'download', component: Download },
  { path: '**', redirectTo: '' }, // error page
];
