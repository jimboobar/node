"use strict";


var Wrapper = require("./Wrapper"),
    Cache = require("./Cache");


module.exports = {
    wrap: wrap,
    cache: cache
};

function wrap(adapter) {
    return new Wrapper(adapter);
}

function cache(data) {
    return wrap(new Cache(data));
}
