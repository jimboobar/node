"use strict";


var Cache = require("../src/Cache"),
    chai = require("chai"),
    expect = chai.expect;


describe("Cache", function() {
    var model = new Cache();

    beforeEach(function() {
        model = new Cache();
    });

    context("#constructor", function() {
        it("should be there", function() {
            expect(model).to.not.be.undefined;
        });

        it("should throw error, if argument other than object", function() {
            var message = /not an object/;

            expect(Cache.bind(null, "fail")).to.throw(message);
            expect(Cache.bind(null, [])).to.throw(message);
            expect(Cache.bind(null, 1)).to.throw(message);
            expect(Cache.bind(null, true)).to.throw(message);
        });

        it("should not throw error if argument is object", function() {
            expect(new Cache({ key: "value" })).to.not.throw;
        });
    });

    context("#save", function() {
        it("should return undefined if no previous item", function() {
            expect(model.save("key", "value")).to.be.undefined;
        });

        it("should return old value", function() {
            model.save("key", "1");

            expect(model.save("key", "2")).to.equal("1");
        });
    });

    context("#load", function() {
        it("should return undefined", function() {
            expect(model.load("key")).to.be.undefined;
        });

        it("should return value for key", function() {
            model.save("key", "value");

            expect(model.load("key")).to.equal("value");
        });
    });

    context("#remove", function() {
        it("should return undefined", function() {
            expect(model.remove("key")).to.be.undefined;
        });

        it("should return stored value", function() {
            model.save("key", "value");

            expect(model.remove("key")).to.equal("value");
        });
    });

    context("#keys", function() {
        it("should be empty", function() {
            expect(model.keys().length).to.be.empty;
        });

        it("should be number of items in cache", function() {
            model.save("k1", "v1");
            model.save("k2", "v2");

            expect(model.keys()).to.deep.equal([ "k1", "k2" ]);
        });
    });

    context("#pairs", function() {
        it("should be empty", function() {
            expect(model.pairs().length).to.be.empty;
        });

        it("should return number of items in cache", function() {
            model.save("k1", "v1");
            model.save("k2", "v2");

            expect(model.pairs()).to.deep.equal([
                { key: "k1", value: "v1" },
                { key: "k2", value: "v2" }
            ]);
        });
    });
});
