import { RouterModule, Routes } from '@angular/router';
import {ContactFormComponent } from './contact-form/contact-form.component';
import {TableDemoComponent} from './table-demo/table-demo.component';
import {SliderBannerComponent} from './slider-banner/slider-banner.component';
import {CountryDataComponent} from './country-data/country-data.component';
import {BtnDisableWithTextComponent} from './btn-disable-with-text/btn-disable-with-text.component';
import {DynamicDdlComponent} from './dynamic-ddl/dynamic-ddl.component';
import {ReactiveFormExpComponent} from './reactive-form-exp/reactive-form-exp.component';
import {UemyHttpServicesExpComponent} from './uemy-http-services-exp/uemy-http-services-exp.component';
import {GithubComponent} from './github/github.component';
import {LoginComponent} from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewchildExpComponent } from './viewchild-exp/viewchild-exp.component';
import { UdemyRoutingComponent } from './udemy-routing/udemy-routing.component';
import {WelcomeComponent} from './welcome/welcome.component';
// import {PreloadAllModules} from '@angular/router'
import { CustomPreloadingStrategyService } from './custom-preloading-strategy.service';
import { BookDataComponent } from './book-data/book-data.component';
import {RouterGaurdService} from './services/Gaurd/router-gaurd.service';
// import { PersonListComponent } from './person/person-list/person-list.component';
const appRoutes: Routes = [
    { path: '' , redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    // {path:'welcome', component:WelcomeComponent},
    // {path:'register', component:UserRegistrationComponent},
     {
        path:'', component:DashboardComponent,
        children:[
           // { path: 'login', component: LoginComponent },
          {path:'welcome', component:WelcomeComponent, canActivate: [RouterGaurdService]},
            { path: 'loginForm', component: ContactFormComponent, canActivate: [RouterGaurdService] },
            { path: 'demoTable', component: TableDemoComponent },
            { path: 'getCountryInfo', component: CountryDataComponent },
            { path: 'enablebtn', component: BtnDisableWithTextComponent },
            { path: 'getddlList', component: DynamicDdlComponent },
            {path:'reactiveFormExp', component: ReactiveFormExpComponent},
            {path:'restApiCall', component: UemyHttpServicesExpComponent},
            {path:'gitHubData', component: GithubComponent},
            {path:'viewChildExp', component: ViewchildExpComponent},
            {path:'httpService', component: UemyHttpServicesExpComponent},
            {path:'udemyRouting', component: UdemyRoutingComponent} ,
            {
              path:'booklist',
              component: BookDataComponent,

            },
            {
              path:'DevExtreme',
             loadChildren:'./dev-extreme/dev-extreme.module#DevExtremeModule',
             data:{preload:false}

            },
            {
              path:'customers',
              loadChildren:'./customers/customers.module#CustomersModule',
              data:{preload:true, delay:true}
            },
            {
              path:'orders',
              loadChildren:'./orders/orders.module#OrdersModule'
            },
            {
              path: 'supplychain',
              loadChildren:'./supply-chain-management/supply-chain-management.module#SupplyChainManagementModule',
              data:{preload:true, delay:false}
            }
            // {path:'personList', component: PersonListComponent}


        ]
    },

    // {path:'**', component: LoginComponent}
//    { path: '' , redirectTo: '/welcome', pathMatch: 'full' },
//     { path: 'welcome', component: WelcomeComponent },
//     { path: 'login', component: LoginComponent },
//     {path:'register', component:UserRegistrationComponent},
//             { path: 'loginForm', component: ContactFormComponent },
//             { path: 'demoTable', component: TableDemoComponent },
//             { path: 'getCountryInfo', component: CountryDataComponent },
//             { path: 'enablebtn', component: BtnDisableWithTextComponent },
//             { path: 'getddlList', component: DynamicDdlComponent },
//             {path:'reactiveFormExp', component: ReactiveFormExpComponent},
//             {path:'restApiCall', component: UemyHttpServicesExpComponent},
//             {path:'gitHubData', component: GithubComponent},
//             {path:'viewChildExp', component: ViewchildExpComponent},
//             {path:'httpService', component: UemyHttpServicesExpComponent},
//             {path:'udemyRouting', component: UdemyRoutingComponent},
//             {path:'**', component: WelcomeComponent}
  ];
  export const routes = RouterModule.forRoot(appRoutes, {
   // preloadingStrategy:PreloadAllModules // for preload syntax
   // preloadingStrategy:CustomPreloadingStrategyService //using custom preload
   preloadingStrategy:CustomPreloadingStrategyService // uisng cusotm preload with delay

  });
