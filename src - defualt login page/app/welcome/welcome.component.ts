import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  listOfExcelFile: any[] = [];
  constructor() { }
  countries = [
    {id: 1, name: 'United States'},
    {id: 2, name: 'Australia'},
    {id: 3, name: 'Canada'},
    {id: 4, name: 'Brazil'},
    {id: 5, name: 'England'}
  ];
  selectedValue = null;
selectFile: File = null;
fileName: string;
  cities = [{'name': 'SF'}, {'name': 'NYC'}, {'name': 'Buffalo'}];
  selectedCity = this.cities[0];

  ngOnInit() {
this.dispalyExcelFile();
  }
  // file upload test
  fileSelected(event) {
    console.log(event);
    this.selectFile = <File>event.target.files[0];
    this.fileName =  this.selectFile.name;
    console.log(this.fileName);
    console.log(this.selectFile);
  }
  public onChange(event): void {  // event will give you full breif of action
    debugger;
    const newVal = event.target.value;
    console.log(newVal);
  }

  onChange1(city) {
    console.log(city);
    alert(city.name);
  }
  dispalyExcelFile() {
    this.listOfExcelFile = [
      { name: "BOT Data", url: 'assets/fileFormat/BOT Template.xlsx' },
      { name: "Financials Data", url: 'assets/fileFormat/Financials Template.xlsx' },
      { name: "Industry Data", url: 'assets/fileFormat/Industry Template.xlsx' },
      { name: "Spend Data", url: 'assets/fileFormat/Spend Template.xlsx' }
    ];
  }

}
