import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Skills } from './pages/skills/skills';
import {Projects} from './pages/projects/projects';
import {AboutMe} from './pages/about-me/about-me';
import {Contact} from './pages/contact/contact';
import {Education} from './pages/education/education';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'skills', component: Skills },
  { path: 'projects', component: Projects },
  { path: 'education', component: Education },
  { path: 'about-me', component: AboutMe },
  { path: 'contact', component: Contact }
];
