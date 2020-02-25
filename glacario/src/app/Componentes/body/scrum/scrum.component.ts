import { Component, OnInit } from '@angular/core';
import { scrumService, scrumte_ } from '../../../servicios/scrum.service';

@Component({
  selector: 'app-scrum',
  templateUrl: './scrum.component.html',
  styleUrls: ['./scrum.component.css']
})
export class ScrumComponent implements OnInit {

  scrumter_:scrumte_ [] = [];

  constructor( private _scrumServ:scrumService) {}

  ngOnInit() {

    this.scrumter_ = this._scrumServ.getScrumte();
    console.log(this.scrumter_);
  }
}
