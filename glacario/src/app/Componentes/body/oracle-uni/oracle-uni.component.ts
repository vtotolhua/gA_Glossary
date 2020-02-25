import { Component, OnInit } from '@angular/core';
import { oracUnivService, oracUnt_ } from '../../../servicios/oracuniv.service';

@Component({
  selector: 'app-oracle-uni',
  templateUrl: './oracle-uni.component.html',
  styleUrls: ['./oracle-uni.component.css']
})
export class OracleUniComponent implements OnInit {
  oracUnivServ: oracUnt_ [] = [];

  constructor( private _oracUnivService:oracUnivService) {}

  ngOnInit() {
    
    this.oracUnivServ = this._oracUnivService.getoracUniv();
    console.log(this.oracUnivServ);

  }

}
