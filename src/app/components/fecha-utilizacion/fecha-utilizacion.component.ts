import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-fecha-utilizacion',
  templateUrl: './fecha-utilizacion.component.html',
  styleUrls: ['./fecha-utilizacion.component.scss']
})
export class FechaUtilizacionComponent implements OnInit {

  @Output() loaded = new EventEmitter<string>();

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');
    console.log(id);
  }



}
