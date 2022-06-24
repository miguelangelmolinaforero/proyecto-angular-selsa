import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-fecha-utilizacion',
  templateUrl: './fecha-utilizacion.component.html',
  styleUrls: ['./fecha-utilizacion.component.scss']
})
export class FechaUtilizacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onReturn(){
    window.location.replace('historico');
  }

}
