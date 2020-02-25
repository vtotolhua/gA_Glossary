import { Component, OnInit } from '@angular/core';
import { gaOfferService, gaofferterm_ } from '../../../servicios/gaoffer.service';

@Component({
  selector: 'app-gaoffer',
  templateUrl: './gaoffer.component.html',
  styleUrls: ['./gaoffer.component.css']
})

export class GaofferComponent implements OnInit {
  
  gaOfferServ:gaofferterm_[] = [];

  constructor(private _gaOfferServcice:gaOfferService) { }

  ngOnInit() {
    this.gaOfferServ = this._gaOfferServcice.getGaofferterm();
    console.log(this.gaOfferServ);
  }

}
