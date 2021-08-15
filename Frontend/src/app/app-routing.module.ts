import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';
import { PropertyListComponent } from './components/property-list/property-list.component';

const routes: Routes = [
  {path:"er", component:PropertyListComponent},
  {path:"add-property", component:AddPropertyComponent},
  {path:"rent-property", component:PropertyListComponent},
  {path:"property-detail/:id", component:PropertyDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
