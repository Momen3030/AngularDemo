import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './compents/nav/nav.component';
import { ContentComponent } from './compents/content/content.component';
import { FooterComponent } from './compents/footer/footer.component';
import { HomeComponent } from './compents/home/home.component';
import { ProductsComponent } from './compents/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { UsdtoEgpPipe } from './pipes/usdto-egp.pipe';
import { ParentComponent } from './compents/order/parent/parent.component';
import { ChildComponent } from './compents/order/child/child.component';
import { PagenotFoundComponent } from './compents/pagenot-found/pagenot-found.component';
import { ProductDetailsComponent } from './compents/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiProductsComponent } from './compents/Api/api-products/api-products.component';
import { ApiproductDetailsComponent } from './compents/Api/apiproduct-details/apiproduct-details.component';
import { NewproductComponent } from './compents/Api/newproduct/newproduct.component';
import { LoginComponent } from './compents/user/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    HighlightDirective,
    UsdtoEgpPipe,
    ParentComponent,
    ChildComponent,
    PagenotFoundComponent,
    ProductDetailsComponent,
    ApiProductsComponent,
    ApiproductDetailsComponent,
    NewproductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
