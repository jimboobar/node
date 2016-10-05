"use strict";


var utils = require("./utils"),
    newError = utils.newError,
    isFn = utils.isFn;


module.exports = function Wrapper(adapter) {
    var api = this;

    validate(adapter);

    api.save = onSave;
    api.load = onLoad;
    api.remove = onRemove;
    api.keys = onKeys;
    api.pairs = onPairs;

    /////

    function onSave(key, item) {
        if (!key) newError("missing <key>");
        if (!item) newError("missing <item>");
        else return adapter.save(key, item);
    }

    function onLoad(key) {
        if (!key) newError("missing <key>");
        else return adapter.load(key);
    }

    function onRemove(key) {
        if (!key) newError("missing <key>");
        else return adapter.remove(key);
    }

    function onKeys() {
        return adapter.keys();
    }

    function onPairs() {
        return adapter.pairs();
    }
};


function validate(adapter) {
    if (!adapter) newError("missing <adapter>");
    if (!isFn(adapter.save)) newError("missing <adapter.save>");
    if (!isFn(adapter.load)) newError("missing <adapter.load>");
    if (!isFn(adapter.remove)) newError("missing <adapter.remove>");
    if (!isFn(adapter.keys)) newError("missing <adapter.keys>");
    if (!isFn(adapter.pairs)) newError("missing <adapter.pairs>");
}
