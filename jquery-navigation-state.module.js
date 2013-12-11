/*global jQuery, $, window, define */
/*jslint node: true */

/*
Author: Simon Menke
Created at: 2012-01-26
Version: 1.0.2

@html
  <body data-active-nav-keys="page-5 page-20">
  <nav>
    <a href="/products" data-nav-key="page-5">Products</a>
    <a href="/about" data-nav-key="page-6">About</a>
  </nav>

  <nav>
    <a href="/products/cookies" data-nav-key="page-9">Cookies</a>
    <a href="/products/milk" data-nav-key="page-20">Milk</a>
  </nav>
  </body>
*/

"use strict";

(function($){

  function NS() {
    var $body = $('body'),
        active_nav_keys = $body.data('active-nav-keys'),
        keys;

    // check
    if (!active_nav_keys) {
      return;
    }

    // get keys
    keys = active_nav_keys.split(' ');

    // loop
    $('*[data-nav-key]', $body).each(function(){
      var $this,
          key;

      $this = $(this);
      key   = $this.data('nav-key');

      if ( $.inArray(key, keys) >= 0 ) {
        $this.addClass('active');

      } else {
        $this.removeClass('active');

      }
    });
  }


  // UMD expose
  if (typeof exports == "object") {
      module.exports = NS;

  } else if (typeof define == "function" && define.amd) {
      define(function() {
        return NS;
      });

  } else {
      window.NavigationState = NS;

  }

}(jQuery));
