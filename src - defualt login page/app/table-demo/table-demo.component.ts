import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-demo',
  templateUrl: './table-demo.component.html',
  styleUrls: ['./table-demo.component.css']
})
export class TableDemoComponent implements OnInit {
  constructor() { }
// constructor(public vin?, public year?, public brand?, public color?,private carService: CarServiceService) {}
title = 'demo-pro';
course = [1, 2, 3];
viewMode = 'map';
skillsTest;
filteredCountriesMultiple: any[];
listOfSkills = [
    { id: 1, name: 'java' },
    { id: 2, name: 'HTML' },
    { id: 3, name: 'Angular 6' },
    { id: 4, name: '.Net' },
];
// added
values: string[];
log(x) {
    console.log(x);
}
onAdd() {
    this.listOfSkills.push({ id: 5, name: 'Spring Boot' });
}
onRemove(course1) {
    const index = this.listOfSkills.indexOf(course1);
    this.listOfSkills.splice(index, 1);
}
loadCource() {
    this.skillsTest = [
        { id: 1, name: 'java' },
        { id: 2, name: 'HTML5' },
        { id: 3, name: 'Angular 6' },
        { id: 4, name: '.Net' },
    ];
}

tarckSkills(index, skill) {
    return skill ? skill.id : undefined;
}
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
  }
  // records = [
  //   { frozen1:'1', frozen2:'1', normal1:'1', normal2:'1', normal3:'1', normal4:'1' },
  //   { frozen1:'2', frozen2:'2', normal1:'2', normal2:'2', normal3:'2', normal4:'2' },
  //   { frozen1:'3', frozen2:'3', normal1:'3', normal2:'3', normal3:'3', normal4:'3' },
  //   { frozen1:'4', frozen2:'4', normal1:'4', normal2:'4', normal3:'4', normal4:'4' }
  //   ]
}
