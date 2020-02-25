import { Component, OnInit } from '@angular/core';
import { cljourneyService, Cljourney_} from '../../../servicios/cljourney.service';

@Component({
  selector: 'app-cljourney',
  templateUrl: './cljourney.component.html',
  styleUrls: ['./cljourney.component.css']
})
export class CljourneyComponent implements OnInit {

  cljourney:Cljourney_ [] = [];


  constructor( private _cljourneyService:cljourneyService) {
     
   }

  ngOnInit() {
    this.cljourney = this._cljourneyService.getcljourney();

    console.log(this.cljourney);
  }
}
