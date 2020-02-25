import { Component, OnInit } from '@angular/core';
import { ErpglosService} from '../../../servicios/erp.service';

@Component({
  selector: 'app-tema2',
  templateUrl: './tema2.component.html',
  styleUrls: ['./tema2.component.css']
})
export class Tema2Component implements OnInit {

  erpglos:any[]=[];

  constructor( private _erpglosService:ErpglosService) {
    console.log("erp componentes");
   }

  ngOnInit() {
    this.erpglos = this._erpglosService.getErpglos();
    console.log(this.erpglos);
  }

}
