let {Stack} = require('../stack');
let {Queue} = require('../queue');
let {LinkedList, Node} = require('../linked-list');

let assert = require('assert');

describe('Stack', function() {
    let a;
    beforeEach(function() {
        a = new Stack(1, 2, 3);
    });
    
    describe('constructor', function() {
        
        it('stores constructor information into object', function() {
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

describe('Queue', function() {
    let a;
    beforeEach(function() {
        a = new Queue(23, 57, 36, 24);
    });

    describe('constructor', function() {
        it('stores constructor information into object', function() {
            assert.deepEqual(a.queue, [23, 57, 36, 24]);
        });
    });

    describe('enqueue()', function() {
        it('adds new items to the end', function() {
            a.enqueue(57);
            assert.deepEqual(a.queue, [23, 57, 36, 24, 57]);

            a.enqueue(99);
            assert.deepEqual(a.queue, [23, 57, 36, 24, 57, 99]);
        });

        it('works with other data types and objects', function() {
            a.enqueue("hello");
            assert.deepEqual(a.queue, [23, 57, 36, 24, "hello"]);

            a.enqueue([1, 2]);
            assert.deepEqual(a.queue, [23, 57, 36, 24, "hello", [1, 2]]);
        });
    });

    describe('dequeue()', function() {
        it('removes item from the beginning', function() {
            a.dequeue();
            assert.deepEqual(a.queue, [57, 36, 24]);

            a.dequeue();
            assert.deepEqual(a.queue, [36, 24]);
        });
    });
});

describe('Singly-linked Linked List', function() {
    let a;
    let newNode;
    beforeEach(function() {
        a = new LinkedList();
        newNode = {
            head: null
        };
    });

    describe('constructor', function() {
        it('creates a new linkedlist of one node', function() {
            assert.deepEqual(a, newNode);
        });

    });

    describe('add()', function() {
        it('throws error on null', function() {
            const err = new TypeError("Values cannot be null")
            assert.throws(() => {
                a.add(null);
            }, err);
        });

        it('sets first node as head', function() {
            let firstNode = new Node(5, null);
            let updatedList = {
                head: firstNode
            }

            a.add(5);
            assert.deepEqual(a, updatedList);
        });

        it('sets second node', function() {
            let secondNode = new Node(6, null);
            let firstNode = new Node(5, secondNode);
            let updatedList = {
                head: firstNode
            }
            a.add(5);
            a.add(6);

            assert.deepEqual(a, updatedList);
        });

        it('sets third node', function() {

            let thirdNode = new Node(7, null)
            let secondNode = new Node(6, thirdNode);
            let firstNode = new Node(5, secondNode);
            let updatedList = {
                head: firstNode
            }
            a.add(5);    
            a.add(6);
            a.add(7);
            
            assert.deepEqual(a, updatedList);
        });
    });

    describe('remove()', function() {
        it('throws error on null', function() {
            const err = new TypeError("Values cannot be null");
            assert.throws(() => {
                a.remove(null);
            }, err);
        });

        it('removes a found node of one', function() {
            let updatedList = {
                head: null
            }    
            a.add(5);
            a.remove(5);

            assert.deepEqual(a, updatedList)
        });

        it('removes a node in a 2 item list', function() {
            let firstNode = new Node(5, null);
            let updatedList = {
                head: firstNode
            }
            a.add(5);
            a.add(6);
            a.remove(6);

            assert.deepEqual(a, updatedList);
        });
    });

});