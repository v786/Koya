import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EstateListComponent } from './estate-list/estate-list.component';
import { CompareRentComponent } from './compare-rent/compare-rent.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'properties', component: EstateListComponent },
  { path: 'properties/:arg1', component: EstateListComponent },
  { path: 'compare-rent', component: CompareRentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
