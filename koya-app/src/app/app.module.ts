import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EstateCardComponent } from './estate-card/estate-card.component';
import { EstateListComponent } from './estate-list/estate-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EstateCardComponent,
    EstateListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
