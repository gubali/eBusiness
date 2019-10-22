import { Component, OnInit } from '@angular/core';
import {AlbumApiService} from '../album-api.service';
import {SelectItem} from 'primeng/api';
// import { restoreView } from '@angular/core/src/render3';
@Component({
  selector: 'app-dynamic-ddl',
  templateUrl: './dynamic-ddl.component.html',
  styleUrls: ['./dynamic-ddl.component.css']
})
export class DynamicDdlComponent implements OnInit {
  constructor(public rest: AlbumApiService) { }
  lstOfAlbum: any = [];
  albumIdList: SelectItem[];
  employes: SelectItem[];
  selectedEmploye: any;

  ngOnInit() {
    this.getAllAlbumData();
    this.employes = [
      {label: 'Select Employee', value: null},
      {label: 'Franc', value: 1},
      {label: 'Kiran', value: 2},
      {label: 'John', value: 3},
    ];
  }
  getAllAlbumData() {
    this.lstOfAlbum = [];
    this.rest.getAllAlbumData().subscribe((data: {}) => {
      // console.log(data);
       this.lstOfAlbum = data;
    });

  }

}
