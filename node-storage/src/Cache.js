"use strict";


module.exports = function Cache(data) {
  var api = this,
      cache = validateAndGet(data);

  api.save = onSave;
  api.load = onLoad;
  api.remove = onRemove;
  api.keys = onKeys;
  api.pairs = onPairs;

  /////

  function onSave(key, value) {
    var old = cache[key];

    cache[key] = value;

    return old;
  }

  function onLoad(key) {
    return cache[key];
  }

  function onRemove(key) {
    var removed = onLoad(key);

    delete cache[key];

    return removed;
  }

  function onKeys() {
    return Object.keys(cache);
  }

  function onPairs() {
    var pairs = {};

    onKeys().forEach(function(key) {
      pairs[key] = cache[key];
    });

    return pairs;
  }
};


function validateAndGet(data) {
  if (!data) return {};
  if (typeof data === "object") return data;
  else throw new Error("not an object");
}
