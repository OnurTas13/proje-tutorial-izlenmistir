import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { PropertyDetailResolverService } from './services/Resolvers/property-detail-resolver.service';

const routes: Routes = [
  {path:"", component:PropertyListComponent},
  {path:"add-property", component:AddPropertyComponent},
  {path:"rent-property", component:PropertyListComponent},
  {path:"property-detail/:id", component:PropertyDetailComponent, resolve: {pdrs: PropertyDetailResolverService}},
  {path:"user/login", component:UserLoginComponent},
  {path:"user/register", component:UserRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
