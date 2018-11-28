import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { DriversComponent } from './drivers/drivers.component';
import { ClientsComponent } from './clients/clients.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProfileComponent } from './profile/profile.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './map/map.component';
import { NguiMapModule } from '@ngui/map';
import { DirectionsComponent } from './directions/directions.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'customers', component: CustomersComponent},
  { path: 'drivers', component: DriversComponent},
  { path: 'about', component: AboutComponent},
  { path: 'clients', component: ClientsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'orders', component: OrdersComponent},
  { path: 'schedule', component: ScheduleComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'shoppingcart', component: ShoppingCartComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'marketplace', component: MarketplaceComponent},
  { path: 'map', component: MapComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    CustomersComponent,
    DriversComponent,
    ClientsComponent,
    AboutComponent,
    LoginComponent,
    OrdersComponent,
    ScheduleComponent,
    FeedbackComponent,
    ShoppingCartComponent,
    ProfileComponent,
    MarketplaceComponent,
    MapComponent,
    DirectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    SchedulerModule,
    BrowserAnimationsModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCVTCJ3toKKGUibIAcZoKhEQYq-OOf_Qnw'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
