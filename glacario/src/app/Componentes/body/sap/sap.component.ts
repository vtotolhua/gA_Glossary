import { Component, OnInit } from '@angular/core';
import { SapService, Sapi } from '../../../servicios/sap.service';

@Component({
  selector: 'app-sap',
  templateUrl: './sap.component.html',
  styleUrls: ['./sap.component.css']
})
export class SapComponent implements OnInit {


  sap:Sapi[]=[];



  constructor( private _sapService:SapService) {

    
   }

  ngOnInit() {

    this.sap = this._sapService.getSap(); 
    console.log(this.sap); 
  }

}
