import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreComponent } from './components/padre/padre.component';
import { Hijo1Component } from './components/hijo1/hijo1.component';
import { Hijo2Component } from './components/hijo2/hijo2.component';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    Hijo1Component,
    Hijo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
