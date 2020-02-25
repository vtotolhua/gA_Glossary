import { Component, OnInit } from '@angular/core';
import { acctngService, acctngte } from '../../../servicios/acctng.service';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.css']
})
export class AccountingComponent implements OnInit {
  acctngtermcol:acctngte[] = [];

  constructor( private _acctngService:acctngService ) { }

  ngOnInit() {
    this.acctngtermcol = this._acctngService.getAcctngterm();
    console.log(this.acctngtermcol);
  }
}
