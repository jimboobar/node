"use strict";


module.exports = {
    newError: newError,
    isFn: isFn
};

function newError(message) {
    throw new Error(message);
}

function isFn(fn) {
    return (typeof fn === "function");
}
