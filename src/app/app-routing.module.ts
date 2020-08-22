import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ProyectComponent } from "./components/proyect/proyect.component";

import { ArticuloComponent } from './components/articulo/articulo.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'articulo', component: ProyectComponent},
  { path: 'articulo/:blog', component: ArticuloComponent},
  { path: 'articulo/:blog/**', component: HomeComponent},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
