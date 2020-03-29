import { CategoryComponent } from './category/category.component';
import { LocationsComponent } from './locations/locations.component';
import { TrainersComponent } from './trainers/trainers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'locations', component: LocationsComponent },
  { path: 'trainers',      component: TrainersComponent },
  { path: 'category',      component: CategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
