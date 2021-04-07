import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiProductsComponent } from './compents/Api/api-products/api-products.component';
import { ApiproductDetailsComponent } from './compents/Api/apiproduct-details/apiproduct-details.component';
import { NewproductComponent } from './compents/Api/newproduct/newproduct.component';
import { HomeComponent } from './compents/home/home.component';
import { ParentComponent } from './compents/order/parent/parent.component';
import { PagenotFoundComponent } from './compents/pagenot-found/pagenot-found.component';
import { ProductDetailsComponent } from './compents/product-details/product-details.component';
import { LoginComponent } from './compents/user/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Products', component: ParentComponent },
  { path: 'Apiproducts', component: ApiProductsComponent },
  { path: 'Apiproduct/:pid', component: ApiproductDetailsComponent },
  { path: 'Newproduct', component: NewproductComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Product/:id', component: ProductDetailsComponent },
  { path: '**', component: PagenotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
