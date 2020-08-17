import { Component, OnInit } from '@angular/core';
import { SapbrService, Sapibr } from "../../../servicios/sapbr.service";


@Component({
  selector: 'app-sapbr',
  templateUrl: './sapbr.component.html',
  styleUrls: ['./sapbr.component.css']
})
export class SapbrComponent implements OnInit {

  sapbr:Sapibr []=[]; 

  constructor( private _sapbrservice:SapbrService ) { }

  ngOnInit() {
    this.sapbr = this._sapbrservice.getsapbr();
    console.log(this.sapbr);

  }

}
