/**
 * Imports for decorators and modules needed for run the program properly
 */
import { Component, OnInit } from '@angular/core';

/**
 * Component decorator for declarate the selector, template, and url for scss
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  /**
   * constructor method
   */
  constructor() {}

  /**
   * ngOnInit function is used for doing some process when we run the server
   */
  ngOnInit(): void {}
}
