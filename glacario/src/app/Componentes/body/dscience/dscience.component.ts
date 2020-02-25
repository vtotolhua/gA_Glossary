import { Component, OnInit } from '@angular/core';
import { dtScienceService, dtscience_} from '../../../servicios/dtscience.service';

@Component({
  selector: 'app-dscience',
  templateUrl: './dscience.component.html',
  styleUrls: ['./dscience.component.css']
})
export class DscienceComponent implements OnInit {

  dtscience : dtscience_ [] = [];


  constructor( private _dtscienceService:dtScienceService) {

   }

  ngOnInit() {
    this.dtscience = this._dtscienceService.getdtScience();
    console.log(this.dtscience);
  }

}
