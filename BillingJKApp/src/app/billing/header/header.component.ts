import { Component, OnInit } from '@angular/core';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'Logo', cols: 12, rows: 1, color: 'lightblue'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
