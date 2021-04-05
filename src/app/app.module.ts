import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './compents/nav/nav.component';
import { ContentComponent } from './compents/content/content.component';
import { FooterComponent } from './compents/footer/footer.component';
import { HomeComponent } from './compents/home/home.component';
import { ProductsComponent } from './compents/products/products.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { UsdtoEgpPipe } from './pipes/usdto-egp.pipe';
import { ParentComponent } from './compents/order/parent/parent.component';
import { ChildComponent } from './compents/order/child/child.component';

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
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
