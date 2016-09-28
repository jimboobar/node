"use strict";


var Storage = require("./src/Storage"),
    CacheAdapter = require("./src/CacheAdapter");


function Factory() {
  var api = this;

  /////

  function storage(adapter, modifier) {
    return new Storage(adapter, modifier);
  }

  function cache(modifier) {
    return storage(new CacheAdapter(), modifier);
  }
}

module.exports = new Factory();
