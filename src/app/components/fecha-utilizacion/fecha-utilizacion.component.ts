/**
 * Necessary imports for the correct program work
 */
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

/**
 * Component decorator for declarate the selector, template, and url for scss
 */
@Component({
  selector: 'app-fecha-utilizacion',
  templateUrl: './fecha-utilizacion.component.html',
  styleUrls: ['./fecha-utilizacion.component.scss']
})
export class FechaUtilizacionComponent implements OnInit {

  /**
   * Implements decorator Output
   */
  @Output() loaded = new EventEmitter<string>();

  /**
   * constructor method
   */
  constructor(private _route: ActivatedRoute) { }

  /**
   * ngOnInit function is used for doing some process when we run the server
   */
  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');
    console.log(id);
  }



}
