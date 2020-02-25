import { Component, OnInit } from '@angular/core';
import {ItilService, Itil} from '../../../servicios/itil.service';

@Component({
  selector: 'app-tema3',
  templateUrl: './tema3.component.html',
  styleUrls: ['./tema3.component.css']
})
export class Tema3Component implements OnInit {

  itil:Itil[] = [];
  constructor( private _itilService:ItilService ) { 
    console.log("ITIL");
  }

  ngOnInit() {
    this.itil = this._itilService.getItil(); 
    console.log(this.itil);
  }
}
