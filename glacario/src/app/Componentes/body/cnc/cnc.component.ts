import { Component, OnInit } from '@angular/core';
import { CncService, cncterm_ } from '../../../servicios/cnc.service';

@Component({
  selector: 'app-cnc',
  templateUrl: './cnc.component.html',
  styleUrls: ['./cnc.component.css']
})
export class CncComponent implements OnInit {

  cncServTerm: cncterm_[] = [];
  
  constructor( private _cncServicios:CncService) { 
   }

  ngOnInit() {
     this.cncServTerm = this._cncServicios.getCncTerm();
      console.log(this.cncServTerm);
  }
}
