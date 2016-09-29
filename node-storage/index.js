"use strict";


var Storage = require("./src/Storage"),
    CacheAdapter = require("./src/CacheAdapter");


function Factory() {
    var api = this;

    api.wrap = onWrap;
    api.cache = onCache;

    /////

    function onWrap(adapter, modifier) {
        return new Storage(adapter, modifier);
    }

    function onCache(modifier) {
        return onWrap(new CacheAdapter(), modifier);
    }
}

module.exports = new Factory();
