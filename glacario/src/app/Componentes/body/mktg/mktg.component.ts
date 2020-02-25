import { Component, OnInit } from '@angular/core';
import { mktgService, mktgterm_ } from '../../../servicios/mktg.service';

@Component({
  selector: 'app-mktg',
  templateUrl: './mktg.component.html',
  styleUrls: ['./mktg.component.css']
})
export class MktgComponent implements OnInit {

  mktServte:mktgterm_ [] = [];
  constructor(private _mktgService:mktgService) { }

  ngOnInit() {

    this.mktServte = this._mktgService.getMktgte();
    console.log(this.mktServte);
  }
}
