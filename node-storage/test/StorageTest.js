"use strict";


var Storage = require("../src/Storage"),
    assert = require("./assert.js"),
    adapter = {
      save: function() {},
      load: function() {},
      remove: function() {},
      keys: function() {},
      pairs: function() {}
    },
    modifier = {
      save: function() {},
      load: function() {},
      remove: function() {}
    };


// missing <adapter>
assert.error("missing <adapter>", function() {
  new Storage();
});

// missing <adapter.save>
assert.error("missing <adapter.save>", function() {
  new Storage({
    save: "fail"
  });
});

// missing <adapter.load>
assert.error("missing <adapter.load>", function() {
  new Storage({
    save: function() {},
    load: "fail"
  });
});

// missing <adapter.load>
assert.error("missing <adapter.load>", function() {
  new Storage({
    save: function() {},
    load: "fail"
  });
});

// missing <adapter.remove>
assert.error("missing <adapter.remove>", function() {
  new Storage({
    save: function() {},
    load: function() {},
    remove: "fail"
  });
});

// missing <adapter.keys>
assert.error("missing <adapter.keys>", function() {
  new Storage({
    save: function() {},
    load: function() {},
    remove: function() {},
    keys: "fail"
  });
});

// missing <adapter.pairs>
assert.error("missing <adapter.pairs>", function() {
  new Storage({
    save: function() {},
    load: function() {},
    remove: function() {},
    keys: function() {},
    pairs: "fail"
  });
});

// missing <modifier.save>
assert.error("missing <modifier.save>", function() {
  new Storage(adapter, {
    save: "fail"
  });
});

// missing <modifier.load>
assert.error("missing <modifier.load>", function() {
  new Storage(adapter, {
    load: "fail"
  });
});

// missing <modifier.remove>
assert.error("missing <modifier.remove>", function() {
  new Storage(adapter, {
    remove: "fail"
  });
});

// create Storage successfully
new Storage(adapter, modifier);
