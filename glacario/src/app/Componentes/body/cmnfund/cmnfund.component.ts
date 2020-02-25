import { Component, OnInit } from '@angular/core';
import {cmFoundationService, oracl_ } from '../../../servicios/cmfoundation.service';


@Component({
  selector: 'app-cmnfund',
  templateUrl: './cmnfund.component.html',
  styleUrls: ['./cmnfund.component.css']
})
export class CmnfundComponent implements OnInit {

  cmfoundation : oracl_ [] = [];

  constructor(private _cmfoundationserv:cmFoundationService) { }

  ngOnInit() {
    
    this.cmfoundation = this._cmfoundationserv.getOracUnite();
    console.log(this.cmfoundation);

  }
}
