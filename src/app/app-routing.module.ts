import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compents/home/home.component';
import { ParentComponent } from './compents/order/parent/parent.component';
import { PagenotFoundComponent } from './compents/pagenot-found/pagenot-found.component';
import { ProductDetailsComponent } from './compents/product-details/product-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Products', component: ParentComponent },
  { path: 'Product/:id', component: ProductDetailsComponent },
  { path: '**', component: PagenotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
