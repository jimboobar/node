"use strict";


var Storage = require("../src/Storage"),
    chai = require("chai"),
    expect = chai.expect;


describe("Storage", function() {
    var stub = function() {},
        adapter = {
            save: stub,
            load: stub,
            remove: stub,
            keys: stub,
            pairs: stub
        };

    context("errors <adapter>", function() {
        it("should throw missing <adapter>", function() {
            expect(Storage).to.throw(/missing <adapter>/);
        });

        it("should throw missing <adapter.save>", function() {
            expect(Storage.bind(null, {
                save: "fail"
            })).to.throw(/missing <adapter.save>/);
        });

        it("should throw missing <adapter.load>", function() {
            expect(Storage.bind(null, {
                save: stub,
                load: "fail"
            })).to.throw(/missing <adapter.load>/);
        });

        it("should throw missing <adapter.remove>", function() {
            expect(Storage.bind(null, {
                save: stub,
                load: stub,
                remove: "fail"
            })).to.throw(/missing <adapter.remove>/);
        });

        it("should throw missing <adapter.keys>", function() {
            expect(Storage.bind(null, {
                save: stub,
                load: stub,
                remove: stub,
                keys: "fail"
            })).to.throw(/missing <adapter.keys>/);
        });

        it("should throw missing <adapter.pairs>", function() {
            expect(Storage.bind(null, {
                save: stub,
                load: stub,
                remove: stub,
                keys: stub,
                pairs: "fail"
            })).to.throw(/missing <adapter.pairs>/);
        });
    });

    context("errors <modifier>", function() {
        it("should throw missing <modifier.save>", function() {
            expect(Storage.bind(null, adapter, {
                save: "fail"
            })).to.throw(/missing <modifier.save>/);
        });

        it("should throw missing <modifier.load>", function() {
            expect(Storage.bind(null, adapter, {
                load: "fail"
            })).to.throw(/missing <modifier.load>/);
        });

        it("should throw missing <modifier.remove>", function() {
            expect(Storage.bind(null, adapter, {
                remove: "fail"
            })).to.throw(/missing <modifier.remove>/);
        });

    });

    context("no error", function() {
        it("should create instance", function() {
            expect(new Storage(adapter, {
                save: stub,
                load: stub,
                remove: stub
            })).to.be.a("object");
        });
    });
});
