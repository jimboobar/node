"use strict";


module.exports = function Storage(adapter, modifier) {
  var api = this;

  validateAdapter(adapter);
  validateModifier(modifier);

  api.save = onSave;
  api.load = onLoad;
  api.remove = onRemove;
  api.keys = onKeys;
  api.pairs = onPairs;

  /////

  function onSave(key, item) {
    if (!key) newError("missing <key>");
    if (!item) newError("missing <item>");
    else return adapter.save(key, (modifier.save
      ? modifier.save(item)
      : item
    ));
  }

  function onLoad(key) {
    if (!key) newError("missing <key>");
    else return (modifier.load
      ? modifier.load(adapter.load(key))
      : adapter.load(key)
    );
  }

  function onRemove(key) {
    if (!key) newError("missing <key>");
    else return (modifier.remove
      ? modifier.remove(adapter.remove())
      : adapter.remove(key)
    );
  }

  function onKeys() {
    return adapter.keys();
  }

  function onPairs() {
    return adapter.pairs();
  }
};


function validateAdapter(adapter) {
  if (!adapter) newError("missing <adapter>");
  if (!isFn(adapter.save)) newError("missing <adapter.save>");
  if (!isFn(adapter.load)) newError("missing <adapter.load>");
  if (!isFn(adapter.remove)) newError("missing <adapter.remove>");
  if (!isFn(adapter.keys)) newError("missing <adapter.keys>");
  if (!isFn(adapter.pairs)) newError("missing <adapter.pairs>");
}

function validateModifier(modifier) {
  if (!modifier) return;
  if (!modFn(modifier.save)) newError("missing <modifier.save>");
  if (!modFn(modifier.load)) newError("missing <modifier.load>");
  if (!modFn(modifier.remove)) newError("missing <modifier.remove>");
}

function newError(message) {
  throw new Error(message);
}

function isFn(fn) {
  return (typeof fn === "function");
}

function modFn(fn) {
  return !fn || isFn(fn);
}
