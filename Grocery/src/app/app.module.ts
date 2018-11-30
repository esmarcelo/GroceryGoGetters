import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { CustomersComponent } from './components/customers/customers.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { ClientsComponent } from './components/clients/clients.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';
import { DriverOrdersListComponent } from './components/driver-orders-list/driver-orders-list.component';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './components/map/map.component';
import { NguiMapModule } from '@ngui/map';
import { DirectionsComponent } from './components/directions/directions.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DriversDeliveredOrdersComponent } from './components/drivers-delivered-orders/drivers-delivered-orders.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'drivers', component: DriversComponent },
  { path: 'about', component: AboutComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'shoppingcart', component: ShoppingCartComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'marketplace', component: MarketplaceComponent },
  { path: 'completedDriverOrders', component: DriverOrdersListComponent },
  { path: 'map', component: MapComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'deliveredDriverOrders', component: DriversDeliveredOrdersComponent}
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
    DriverOrdersListComponent,
    MapComponent,
    DirectionsComponent,
    SignUpComponent,
    DriversDeliveredOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    SchedulerModule,
    BrowserAnimationsModule,
    FormsModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCVTCJ3toKKGUibIAcZoKhEQYq-OOf_Qnw'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
