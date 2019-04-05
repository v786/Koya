import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EstateListComponent } from './estate-list/estate-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'properties', component: EstateListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
