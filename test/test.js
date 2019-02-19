let {Stack} = require('../stack');
let assert = require('assert');

describe('Stack', function() {
    let a;
    beforeEach(function() {
        a = new Stack(1, 2, 3);
    });
    
    describe('constructor', function() {
        
        it('stores array information into object', function() {
            assert.deepEqual(a.stack, [1, 2, 3]);
        });
    });

    describe('push()', function() {
        
        it('pushes item to top of the stack', function() {
            a.push(5);
            assert.deepEqual(a.stack, [5, 1, 2, 3]);

            a.push(6);
            assert.deepEqual(a.stack, [6, 5, 1, 2, 3]);

        });

        it('works with other data types', function() {
            a.push("hello");
            assert.deepEqual(a.stack, ["hello", 1, 2, 3]);

            a.push([5, 7]);
            assert.deepEqual(a.stack, [[5, 7], "hello", 1, 2, 3]) 
        });


    });

    describe('pop()', function() {

        it('pops item from the top of the stack and returns it', function() {
            a.pop();
            assert.deepEqual(a.stack, [2, 3]);

            a.pop();
            assert.deepEqual(a.stack, [3]);
        });
    });

});