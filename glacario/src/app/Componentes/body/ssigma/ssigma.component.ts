import { Component, OnInit } from '@angular/core';
import { ssigmaService, ssigmat_ } from '../../../servicios/ssigma.service';


@Component({
  selector: 'app-ssigma',
  templateUrl: './ssigma.component.html',
  styleUrls: ['./ssigma.component.css']
})
export class SsigmaComponent implements OnInit {

  ssigmaServ : ssigmat_ [] = [];

  constructor( private _ssigmaserv:ssigmaService) { }

  ngOnInit() {
    
    this.ssigmaServ = this._ssigmaserv.getSsgimate();
    console.log(this.ssigmaServ);
  }

}
