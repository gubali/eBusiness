import { Component, OnInit } from '@angular/core';
import { Car } from './car';
import { CarServiceService } from './car-service.service';
import { FormsModule } from '@angular/forms';
import { CountriesService } from './countries.service';
import { Event, Router, NavigationStart, NavigationEnd, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    // providers: [CountriesService]
})
export class AppComponent implements OnInit {
    constructor( private _router: Router) {
        // this._router.events.subscribe((routerEvent: Event) => {
        //     debugger;
        //     if (routerEvent instanceof NavigationStart) {
        //         this.showLoadingIndicator = true;
        //     }
        //     else (routerEvent instanceof NavigationEnd)
        //     {
        //         this.showLoadingIndicator = false;
        //     }
        // });
    }
    // constructor() { }
    showLoadingIndicator = true;
    images: any[];
    items: MenuItem[];
    // constructor(public vin?, public year?, public brand?, public color?,private carService: CarServiceService) {}
    title = 'demo-pro';
    // course = [1, 2, 3];
    // viewMode = 'map';
    // skillsTest;
    country: any;
    countries: any[];
    // items: MenuItem[];
    items1: MenuItem[];
    filteredCountriesMultiple: any[];
    log(x ) {
        console.log(x);
    }
    // listOfSkills = [
    //     { id: 1, name: 'java' },
    //     { id: 2, name: 'HTML' },
    //     { id: 3, name: 'Angular 6' },
    //     { id: 4, name: '.Net' },
    // ]
    // onAdd() {
    //     this.listOfSkills.push({ id: 5, name: 'Spring Boot' });
    // }
    // onRemove(course1) {
    //     let index = this.listOfSkills.indexOf(course1);
    //     this.listOfSkills.splice(index, 1);
    // }
    // loadCource() {
    //     this.skillsTest = [
    //         { id: 1, name: 'java' },
    //         { id: 2, name: 'HTML5' },
    //         { id: 3, name: 'Angular 6' },
    //         { id: 4, name: '.Net' },
    //     ];
    // }

    // tarckSkills(index, skill) {
    //     return skill ? skill.id : undefined;
    // }
    // added
   // values: string[];
    //   filterCountryMultiple(event) {
    //     let query = event.query;
    //     this.countryService.getCountries().then(countries => {
    //         this.filteredCountriesMultiple = this.filterCountry(query, countries);
    //     });
    // }

    // filterCountry(query, countries: any[]):any[] {

    //     let filtered : any[] = [];
    //     for(let i = 0; i < countries.length; i++) {
    //         let country = countries[i];
    //         if(country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
    //             filtered.push(country);
    //         }
    //     }
    //     return filtered;
    // }


    ngOnInit() {
        // spinner
        this.images = [];
        this.images.push({source: '../assets/1.png', alt: 'Description for Image 1', title: 'Title 1'});
        this.images.push({source: '../assets/2.jpg', alt: 'Description for Image 2', title: 'Title 2'});
        // end
        // this.countryService.getCountries();

    //     this.items = [{
    //         label: 'User Maintanence',
    //         items: [
    //             { label: 'Go to Login Page', routerLink: ['/loginForm']},
    //             { label: 'Go to Table Demo', routerLink: ['/demoTable']}
    //         ]
    //     },
    //     {
    //         label: 'Worlds Tours',
    //         items: [
    //             { label: 'CountryInfo', routerLink: ["/getCountryInfo"] }
    //         ]
    //     },
    //     {
    //         label: 'GitHiub',
    //         items: [
    //             { label: 'Follower', routerLink: ["/gitHubData"] }
    //         ]
    //     }
    // ];

        // mega menu
        // this.items1 = [
        //     {
        //         icon: 'fa fa-fw fa-check', label: 'User Maintanence',
        //         items: [
        //             [
        //                 {
        //                     items: [{label: 'Go to Login Page',icon: 'fa fa-hand-o-right', routerLink: ['/loginForm']}]
        //                 },
        //                 {
        //                     items: [{label: 'Go to Table Demo',icon: 'fa fa-hand-o-right', routerLink: ['/demoTable']}]
        //                 }
        //             ],

        //         ]
        //     },
        //     {
        //         label: 'Worlds Tours!', icon: 'fa fa-fw fa-soccer-ball-o',
        //         items: [
        //             [
        //                 {
        //                     items: [{ label: 'CountryInfo', routerLink: ["/getCountryInfo"] }]
        //                 },

        //             ]
        //         ]
        //     },
        //     {
        //         label: 'Delete', icon: 'fa fa-fw fa-trash',
        //         items: [
        //             [
        //                 {
        //                     label: 'Sports 1',
        //                     items: [{ label: 'Sports 1.1' }, { label: 'Sports 1.2' }]
        //                 },
        //                 {
        //                     label: 'Sports 2',
        //                     items: [{ label: 'Sports 2.1' }, { label: 'Sports 2.2' }]
        //                 },

        //             ]
        //         ]
        //     },

        // ];
    }
// gallry

}
// mega menu



