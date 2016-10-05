"use strict";


var Service = require("../src/Service"),
    Wrapper = require("../src/Wrapper"),
    chai = require("chai"),
    expect = chai.expect;

function stub() {

}

describe("Service", function() {
    describe("#wrap", function() {
        it("should throw error when missing adapter", function() {
            expect(Service.wrap.bind(Service))
                .to.throw("missing <adapter>");
        });

        it("should return a wrapped instance", function() {
            expect(Service.wrap({
                save: stub,
                load: stub,
                remove: stub,
                keys: stub,
                pairs: stub
            })).to.be.instanceOf(Wrapper);
        });
    });

    describe("#cache", function() {
        it("should return an empty cache", function() {
            expect(Service.cache())
                .to.be.instanceOf(Wrapper);
        });

        it("should return cache with provided data", function() {
            var cache = Service.cache({ key: "value" });
            
            expect(cache.load("key")).to.equal("value");
        });
    });
});
