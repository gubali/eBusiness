import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {EditorModule} from 'primeng/editor';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import {MenuModule} from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MegaMenuModule} from 'primeng/megamenu';
import { TableDemoComponent } from './table-demo/table-demo.component';
import {routes} from './app.routes';
import { SliderBannerComponent } from './slider-banner/slider-banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountryDataComponent } from './country-data/country-data.component';
import {GalleriaModule} from 'primeng/galleria';
import { BtnDisableWithTextComponent } from './btn-disable-with-text/btn-disable-with-text.component';
import { DynamicDdlComponent } from './dynamic-ddl/dynamic-ddl.component';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import { ReactiveFormExpComponent } from './reactive-form-exp/reactive-form-exp.component';
import { UemyHttpServicesExpComponent } from './uemy-http-services-exp/uemy-http-services-exp.component';
import { Tier3ApicallComponent } from './tier3-apicall/tier3-apicall.component';
import { PostService } from './services/post.service';
import { GithubComponent } from './github/github.component';
import {MenubarModule} from 'primeng/menubar';
import { LoginComponent } from './login/login.component';
import { HeaderMenuBarComponent } from './header-menu-bar/header-menu-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewchildExpComponent } from './viewchild-exp/viewchild-exp.component';
import { HoverDirectiveDirective } from './directive/hover-directive.directive';
import { AppErrorHandler } from './services/global-app-handler';
import { UdemyRoutingComponent } from './udemy-routing/udemy-routing.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustomPreloadingStrategyService } from './custom-preloading-strategy.service';
import {BookServiceService} from './services/book-service.service'
import {TestData} from './fake-api'
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { BookDataComponent } from './book-data/book-data.component';
import {enableProdMode} from '@angular/core';
import {RouterGaurdService} from './services/Gaurd/router-gaurd.service';
import { Test1Component } from '../app/test1.component'

@NgModule({
  declarations: [
    AppComponent,
    RightSidebarComponent,
    FooterComponent,
    MainBodyComponent,
    InputFormatDirective,
    ContactFormComponent,
    TableDemoComponent,
    SliderBannerComponent,
    CountryDataComponent,
    BtnDisableWithTextComponent,
    DynamicDdlComponent,
    ReactiveFormExpComponent,
    UemyHttpServicesExpComponent,
    Tier3ApicallComponent,
    GithubComponent,
    LoginComponent,
    HeaderMenuBarComponent,
    DashboardComponent,
    ViewchildExpComponent,
    HoverDirectiveDirective,
    UdemyRoutingComponent,
    WelcomeComponent,
    BookDataComponent,
    Test1Component,
    
  
        
 
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    TableModule,
        InputTextModule,
        DialogModule,
        ButtonModule,
        FormsModule,
        EditorModule,
        CheckboxModule,
        RadioButtonModule,
        AutoCompleteModule,
        HttpClientModule,
        MenuModule,
        BrowserAnimationsModule,
        MegaMenuModule,
        routes,
        NgbModule,
        GalleriaModule,
        CardModule,
        DropdownModule,
        MenubarModule,
       InMemoryWebApiModule.forRoot(TestData),
      
        
        
        

  ],
  providers: [
    PostService,
    //for global error
    {
provide: AppErrorHandler, useClass: AppErrorHandler
    },
    CustomPreloadingStrategyService,
    BookServiceService,
    RouterGaurdService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log('App module is loaded!');
    
  }
}
