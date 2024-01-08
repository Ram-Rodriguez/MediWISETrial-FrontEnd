import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { AdminModule } from './admin/admin.module';
import { SignupModule } from './signup/signup.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    AdminModule,
    SignupModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
