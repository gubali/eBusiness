import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { DefaultIndexComponent } from './default-index/default-index.component';
import {InputTextModule} from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { HighlightTextDirective } from '../app/directive/highlight-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DefaultIndexComponent,
    LeftNavigationComponent,
    HighlightTextDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
