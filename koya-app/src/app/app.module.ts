import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EstateCardComponent } from './estate-card/estate-card.component';
import { EstateListComponent } from './estate-list/estate-list.component';
import { CompareRentComponent } from './compare-rent/compare-rent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EstateCardComponent,
    EstateListComponent,
    CompareRentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
