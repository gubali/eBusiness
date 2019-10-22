import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header-menu-bar',
  templateUrl: './header-menu-bar.component.html',
  styleUrls: ['./header-menu-bar.component.css']
})
export class HeaderMenuBarComponent implements OnInit {
  items: MenuItem[];
  u_name:string;
  constructor(private route:Router) { }

  ngOnInit() {
    
    this.items = [{
      label: 'User Maintanence',
      items: [
          { label: 'Go to Login Page', routerLink: ['/loginForm']},
          { label: 'Go to Table Demo', routerLink: ['/demoTable']}
      ]
  },
  {
      label: 'Worlds Tours',
      items: [
          { label: 'CountryInfo', routerLink: ["/getCountryInfo"] }
      ]
  },
  {
      label: 'GitHiub',
      items: [
          { label: 'Follower', routerLink: ["/gitHubData"] }
      ]
  },
  {
    label: 'Tutor',
    items: [
        { label: 'ViewChild', routerLink: ["/viewChildExp"] }
    ]
},
{
  label: 'Udemy',
  items: [
      { label: 'Http Service', routerLink: ["/httpService"] },
      { label: 'Routing', routerLink: ["/udemyRouting"] },
      {label:'DevXtreme', routerLink:["/DevExtreme"]}
  ]
}
];
this.u_name = localStorage.getItem('username');
window.addEventListener('storage', (event) => {
  if (event.key === 'logged_in') {
      debugger;
      //window.location.href = this.globalsService.ssoURL;
      this.route.navigate(['/']);
  }
}, localStorage.getItem('logged_in') != 'false')


}
logOut(){
  
  window.localStorage.removeItem('logged_in')
                  window.localStorage.setItem('logged_in', 'false');
                  this.route.navigate(['/'])
    }
  }



