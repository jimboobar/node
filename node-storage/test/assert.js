"use strict";


module.exports = {
  fail: onFail,
  equal: onEqual,
  error: onError
};


function onFail(message) {
  if (typeof Error !== "undefined") {
    throw new Error(message);
  }
  throw message; // Fallback
}

function onEqual(a, b) {
  if (a !== b) onFail(a + " does not equal " + b);
}

function onError(message, fn) {
  try {
    fn();
    onFail("expected error \"" + message + "\" to be thrown");
  } catch (e) {
    onEqual(e.message, message);
  }
}
