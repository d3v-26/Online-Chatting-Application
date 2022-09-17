import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layouts/header/header.component';
import { MainComponent } from './layouts/main/main.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../auth/components/login/login.component';
import { RegisterComponent } from '../auth/components/register/register.component';
import { ResetPasswordComponent } from '../auth/components/reset-password/reset-password.component';
import { AuthModule } from '../auth/auth.module';
import { HomeComponent } from './layouts/home/home.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ProfileComponent } from './layouts/profile/profile.component';



@NgModule({
  declarations: [HeaderComponent, MainComponent, FooterComponent, HomeComponent, AlertsComponent, ProfileComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, MainComponent, FooterComponent, HomeComponent]
})
export class SharedModule { }
