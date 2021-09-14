import { AuthService } from './services/auth.service';
import { AlertifyService } from './services/alertify.service';
import { UserServiceService } from './services/user-service.service';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { PropertyNotfoundComponent } from './property/property-notfound/property-notfound.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

const appRoute: Routes = [
  { path: '', component: PropertyListComponent },//home page
  { path: 'add-property', component: AddPropertyComponent },
  { path: 'rent-property', component: PropertyListComponent },
  { path: 'property-detail/:id', component: PropertyDetailComponent },
  { path: 'user/register', component: UserRegisterComponent },
  { path: 'user/login', component: UserLoginComponent },
  { path: '**', component: PropertyNotfoundComponent },//not found page
];

@NgModule({
  declarations: [
    AppComponent,NavBarComponent,
    PropertyCardComponent,PropertyListComponent,
    AddPropertyComponent,PropertyDetailComponent,
    PropertyNotfoundComponent,UserLoginComponent,UserRegisterComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,
    FormsModule,//to use template form way
    ReactiveFormsModule,// to use reactive forms way
    RouterModule.forRoot(appRoute),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),BsDatepickerModule.forRoot()
  ],
  providers: [HousingService,UserServiceService,AlertifyService,AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
