/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
   File Name:          10.1.5-3.js
   ECMA Section:       10.1.5 Global Object
   Description:
   There is a unique global object which is created before control enters
   any execution context. Initially the global object has the following
   properties:

   Built-in objects such as Math, String, Date, parseInt, etc. These have
   attributes { DontEnum }.

   Additional host defined properties. This may include a property whose
   value is the global object itself, for example window in HTML.

   As control enters execution contexts, and as ECMAScript code is executed,
   additional properties may be added to the global object and the initial
   properties may be changed.

   Author:             christine@netscape.com
   Date:               12 november 1997
*/
var SECTION = "10.5.1-3";
writeHeaderToLog( SECTION + " Global Object");

addTestCase();

test();

function addTestCase() {
  new TestCase( "Function Code check: Object", false, Object == null);
  new TestCase( "Function Code check: Function", false, Function == null);
  new TestCase( "Function Code check: String", false, String == null);
  new TestCase( "Function Code check: Array", false, Array == null);
  new TestCase( "Function Code check: Number", false, Number == null);
  new TestCase( "Function Code check: Math", false, Math == null);
  new TestCase( "Function Code check: Boolean", false, Boolean == null);
  new TestCase( "Function Code check: Date", false, Date == null);
  new TestCase( "Function Code check: eval", false, eval == null);
  new TestCase( "Function Code check: parseInt", false, parseInt == null);
}
