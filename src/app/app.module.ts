import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxGistModule } from 'ngx-gist/dist/ngx-gist.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProyectComponent } from './components/proyect/proyect.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from "@angular/forms";

import { NavheaderComponent } from './components/navheader/navheader.component';
import { NavfoneotherComponent } from './components/navfoneother/navfoneother.component';
import { NavotherComponent } from './components/navother/navother.component';
import { ArticlehomeComponent } from './components/articlehome/articlehome.component';
import { FootercComponent } from './components/footerc/footerc.component';
import { ContactComponent } from './components/contact/contact.component';
@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    NgxGistModule 
    HttpClientModule,
    ReactiveFormsModule,  
  ],
  declarations: [ 
    AppComponent,
    HelloComponent
    HomeComponent,
    AboutComponent,
    ProyectComponent,
    NavotherComponent,
    NavfoneotherComponent,
    NavheaderComponent,
    ArticlehomeComponent,
    FootercComponent,
    ContactComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
