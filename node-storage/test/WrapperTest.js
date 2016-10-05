"use strict";


var Wrapper = require("../src/Wrapper"),
    chai = require("chai"),
    expect = chai.expect;


function stub() {
    var args = arguments;

    return Object.keys(args).map(function (key) {
        return args[key];
    });
}


describe("Wrapper", function() {
    var adapter = {
        save: stub,
        load: stub,
        remove: stub,
        keys: stub,
        pairs: stub
    };

    describe("#constructor", function() {
        it("should throw missing <adapter>", function() {
            expect(Wrapper).to.throw(/missing <adapter>/);
        });

        it("should throw missing <adapter.save>", function() {
            expect(Wrapper.bind(null, {
                save: "fail"
            })).to.throw(/missing <adapter.save>/);
        });

        it("should throw missing <adapter.load>", function() {
            expect(Wrapper.bind(null, {
                save: stub,
                load: "fail"
            })).to.throw(/missing <adapter.load>/);
        });

        it("should throw missing <adapter.remove>", function() {
            expect(Wrapper.bind(null, {
                save: stub,
                load: stub,
                remove: "fail"
            })).to.throw(/missing <adapter.remove>/);
        });

        it("should throw missing <adapter.keys>", function() {
            expect(Wrapper.bind(null, {
                save: stub,
                load: stub,
                remove: stub,
                keys: "fail"
            })).to.throw(/missing <adapter.keys>/);
        });

        it("should throw missing <adapter.pairs>", function() {
            expect(Wrapper.bind(null, {
                save: stub,
                load: stub,
                remove: stub,
                keys: stub,
                pairs: "fail"
            })).to.throw(/missing <adapter.pairs>/);
        });
    });


    context("when created", function() {
        var wrapper = new Wrapper(adapter);

        it("should exist", function() {
            expect(wrapper).to.be.a("object");
        });


        describe("#save", function() {
            it("should throw error when missing key", function() {
                expect(wrapper.save.bind(wrapper))
                    .to.throw("missing <key>");
            });

            it("should throw error when missing item", function() {
                expect(wrapper.save.bind(wrapper, "test"))
                    .to.throw("missing <item>");
            });

            it("should call adapter.save()", function() {
                expect(wrapper.save("save", {}))
                    .to.deep.equal(["save", {}]);
            });
        });


        describe("#load", function() {
            it("should throw error when missing key", function() {
                expect(wrapper.load.bind(wrapper))
                    .to.throw("missing <key>");
            });

            it("should call adapter.load()", function() {
                expect(wrapper.load("load"))
                    .to.deep.equal(["load"]);
            });
        });


        describe("#remove", function() {
            it("should throw error when missing key", function() {
                expect(wrapper.remove.bind(wrapper))
                    .to.throw("missing <key>");
            });

            it("should call adapter.remove()", function() {
                expect(wrapper.remove("remove"))
                    .to.deep.equal(["remove"]);
            });
        });


        describe("#keys", function() {
            it("should call adapter.keys()", function() {
                expect(wrapper.keys("ignore"))
                    .to.deep.equal([]);
            });
        });


        describe("#pairs", function() {
            it("should call adapter.pairs()", function() {
                expect(wrapper.pairs("ignore"))
                    .to.deep.equal([]);
            });
        });
    });
});
