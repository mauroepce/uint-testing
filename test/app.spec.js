const assert = require("assert");
const { expect } = require("chai");
const { isTypedArray } = require("util/types");
const { add } = require("../src/app");
const { sub } = require("../src/app");

describe("the add function", () => {

    it("should add 2 numbers together", () => {
        const result = add(2, 2);
        //assert.equal(result, 5); // using assert => mocha
        //using chai
        expect(result).to.be.eq(4);
    
    });

    it("Should be able to handle a number", () => {
        const result = add(2);
        expect(result).to.be.eq(2);
    });

    it("Should be able to handle 0 number", () => {
        const result = add();
        expect(result).to.be.eq(0);
    });

    it("should be able to return 0 if either argument is not a number", () => {
        const result = add(3, "Not a number");
        expect(result).to.be.eq(0);
    });

});  

describe("the sub function", () => {

    it("should substract 2 numbers", () => {
        const result = sub(2, 2);
        expect(result).to.be.eq(0);
    });

    it("should be able to handle a number", () => {
        const result = sub(3);
        expect(result).to.be.eq(3);
    })

    it("should be able to handle a number as a second argument", () => {
        const result = sub(0, 4);
        expect(result).to.be.eq(-4);
    });
});