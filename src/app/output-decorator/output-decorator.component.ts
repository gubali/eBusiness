import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-decorator',
  templateUrl: './output-decorator.component.html',
  styleUrls: ['./output-decorator.component.css']
})
export class OutputDecoratorComponent implements OnInit {
 username = 'asif';
 companyname = 'Wipro Digital';
 message = '';
  componentDetails: any = [{
    id: 1,
    name: 'out put decorator'
  },
  {
    id: 2,
    name: 'input decorator'
  }
  ];
  listOfAccordHeader: any = [
    {name: 'Accord 1', path: 'abc'},
    {name: 'Accord 2', path: 'abcd'},
    {name: 'Accord 3', path: 'abce'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
