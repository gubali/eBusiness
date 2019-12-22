import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { DefaultIndexComponent } from './default-index/default-index.component';
import {InputTextModule} from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { HighlightTextDirective } from '../app/directive/highlight-text.directive';
import { UserNameValidationDirective } from './directive/user-name-validation.directive';
import { IndutDecoratorComponent } from './indut-decorator/indut-decorator.component';
import { OutputDecoratorComponent } from './output-decorator/output-decorator.component';
import {AccordionModule} from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DefaultIndexComponent,
    LeftNavigationComponent,
    HighlightTextDirective,
    UserNameValidationDirective,
    IndutDecoratorComponent,
    OutputDecoratorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AccordionModule,
    BrowserAnimationsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
