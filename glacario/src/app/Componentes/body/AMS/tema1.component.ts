import { Component, OnInit } from '@angular/core';
import { AmsService, amsglste } from '../../../servicios/ams.service';

@Component({
  selector: 'app-tema1',
  templateUrl: './tema1.component.html',
  styleUrls: ['./tema1.component.css']
})
export class Tema1Component implements OnInit {
  amsglos:amsglste [] = [];

  constructor (private _amsService:AmsService) {
    console.log("servicio ERP listo para usar");
  }


  ngOnInit() {
    this.amsglos = this._amsService.getAmsglos();
    console.log(this.amsglos);
  } 

}
 
