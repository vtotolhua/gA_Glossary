import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { buscadorService } from '../../../servicios/buscador.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  buscarterm:any [] = [];
  termino:string; 

  constructor( private _activateRouter:ActivatedRoute,
                private _buscadorService:buscadorService, 
                ) {
   }

  ngOnInit() {
    this._activateRouter.params.subscribe(params =>{
      this.termino = params ['termino'];
      this.buscarterm = this._buscadorService.buscarTerminos( params ['termino'] );
      console.log(this.buscarterm);    
    });
  }

}
