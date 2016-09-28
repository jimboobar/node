"use strict";


var Cache = require("../src/Cache"),
    assert = require("./assert.js");


// invalid data
assert.error("not an object", function() {
  new Cache("fail");
});

// new Cache with data and Cache.load()
assert.equal("value", (function() {
  var cache = new Cache({
    key: "value"
  });

  return cache.load("key");
}()));

// Cache.save() returns old value
assert.equal("old", (function() {
  var cache = new Cache({
    key: "old"
  });

  return cache.save("key", "new");
}()));

// Cache.save() and Cache.load()
assert.equal("value", (function() {
  var cache = new Cache();

  cache.save("key", "value");

  return cache.load("key");
}()));
