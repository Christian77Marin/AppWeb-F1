import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { F1RankingtableComponent } from './f1-rankingtable/f1-rankingtable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DriverComponent } from './driver/driver.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes =[
  {path: '', component: F1RankingtableComponent, pathMatch: 'full'},
  {path: 'ranking', component: F1RankingtableComponent},
  {path: 'ranking/:id', component: F1RankingtableComponent},
  {path: 'driver/:id', component: DriverComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    F1RankingtableComponent,
    HeaderComponent,
    FooterComponent,
    DriverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
