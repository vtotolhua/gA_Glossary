import { Component, OnInit } from '@angular/core';
import { genLedgerService, genLedgercol } from '../../../servicios/genledger.service';

@Component({
  selector: 'app-genledger',
  templateUrl: './genledger.component.html',
  styleUrls: ['./genledger.component.css']
})
export class GenledgerComponent implements OnInit {

  genlegertermExt:genLedgercol [] = [];

  constructor( private _genLedgerService:genLedgerService) { }

  ngOnInit() {
    this.genlegertermExt = this._genLedgerService.getGenledgterm();
    console.log(this.genlegertermExt); 
  }

}
