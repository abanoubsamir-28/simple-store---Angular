import { CardComponent } from './card/card.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:AllproductsComponent},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'productdetails/:id' , component:ProductdetailsComponent},
  {path:'card' , component:CardComponent},
  {path:'**' , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
