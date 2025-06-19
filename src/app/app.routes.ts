import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Download } from './pages/download/download';
import { Help } from './pages/help/help';
import { Whyoreon } from './pages/whyoreon/whyoreon';

export const routes: Routes = [
  { path: '', component: Home }, // home page
  { path: 'download', component: Download }, // download page
  { path: 'help', component: Help }, // help page
  { path: 'whyoreon', component: Whyoreon }, // why oreon
  { path: '**', redirectTo: '' }, // error page (needs to be implemented still, goes to homepage for now)
];
