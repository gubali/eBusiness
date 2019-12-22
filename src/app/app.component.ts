import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'eShop';
  userdata = 'Admin Khan';
  listDetails: any = [{
    id: 1,
   name: 'Eurasian Collared-Dove'
},
{
  id: 1,
 name: 'Eurasian Collared-Dove'
}
];
  // parent= 'This data is of parent component';
  ngOnInit() {
    this.addNumber(2, 2);
    console.log(this.listDetails);

  }
  addNumber(a, b) {
    const c = a + b;
    // alert(c)
  }

}
