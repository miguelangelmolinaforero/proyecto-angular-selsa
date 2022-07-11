// This file is required by karma.conf.js and loads recursively all the .spec and framework files

/**
 * Import zone
 */
import 'zone.js/testing';
/**
 * Import TestBed
 */
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

/**
 * Declare all requirements
 */
declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};

/**
 * First, initialize the Angular testing environment.
 */

/**
 * The function getTestBed is used for initilize a new environment
 */
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
  { teardown: { destroyAfterEach: true }},
);

/**
 * Then we find all the tests.
 */
const context = require.context('./', true, /\.spec\.ts$/);
/**
 * And load the modules.
 */
context.keys().map(context);
