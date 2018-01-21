import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { AppRoutingModule} from './app.routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
 import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { BlogComponent } from './components/blog/blog.component';

//import { FlashMessagesModule } from 'angular2-flash-messages';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    BlogComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  //  FlashMessagesModule
  ],
  providers: [AuthService, AuthGuard, NotAuthGuard],
 bootstrap: [AppComponent]
})
export class AppModule { }
