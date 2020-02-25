import { Component, OnInit } from '@angular/core';
import { navgtService, navgterm } from '../../../servicios/navgt.service';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {

  navgtermp: navgterm [] = [];

  constructor( private _nvgtService:navgtService ) { }

  ngOnInit() {

    this.navgtermp = this._nvgtService.getNavgterm();
    console.log(this.navgtermp);

  }
}
