import { Component, OnInit } from '@angular/core';
import { RpaService, Rpa_ } from '../../../servicios/rpa.service'; 

@Component({
  selector: 'app-rpa',
  templateUrl: './rpa.component.html',
  styleUrls: ['./rpa.component.css']
})
export class RpaComponent implements OnInit {

  rpa:Rpa_ [] = [];

  constructor( private _rpaService:RpaService) {
    console.log("RPA prueba servicio");


   }

  ngOnInit() {

    this.rpa = this._rpaService.getRpa();
    console.log(this.rpa);
  }

}
