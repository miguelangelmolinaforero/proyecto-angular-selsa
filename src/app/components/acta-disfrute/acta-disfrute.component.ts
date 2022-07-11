/**
 * Imports for decorators and modules needed for run the program properly
 */
import { Component, OnInit } from '@angular/core';

/**
 * Component decorator for declarate the selector, template, and url for scss
 */
@Component({
  selector: 'app-acta-disfrute',
  templateUrl: './acta-disfrute.component.html',
  styleUrls: ['./acta-disfrute.component.scss']
})
export class ActaDisfruteComponent implements OnInit {

  /**
   * constructor method
   */
  constructor() { }

  /**
   * ngOnInit function is used for doing some process when we run the server
   */
  ngOnInit(): void {
  }

  /**
   * function onReturn() send us with a click for another page, and the website is recharging
   */
  onReturn(){
    window.location.replace('historico');
  }

}
