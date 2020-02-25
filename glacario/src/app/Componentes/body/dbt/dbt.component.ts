import { Component, OnInit } from '@angular/core';
import {dbtService, dbt_} from '../../../servicios/dbt.service';

@Component({
  selector: 'app-dbt',
  templateUrl: './dbt.component.html',
  styleUrls: ['./dbt.component.css']
})
export class DbtComponent implements OnInit {

  dbtserv:dbt_ [] = [];


  constructor( private _dbtService:dbtService) { }


  ngOnInit() {

    this.dbtserv = this._dbtService.getDbt();
    console.log(this.dbtserv);
  }
}
