/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {

    const test = new Object();

    test.toBe = (otherVal) => {
        if (otherVal === val) return true;
        else throw new Error("Not Equal");
    }
    test.notToBe = (otherVal)=> {
        if (otherVal !== val) return true;
        else throw new Error("Equal");
    }

    return test;
    };

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */