let {Stack} = require('../stack');
let {Queue} = require('../queue');
let {SinglyLinkedList, Node} = require('../singly-linked-list');
let {DoublyLinkedList, DoubleNode} = require('../doubly-linked-list');

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
        a = new SinglyLinkedList();
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

        it("doesn't remove if it can't find a match", function() {
            let secondNode = new Node(6, null);
            let firstNode = new Node(5, secondNode);
            let updatedList = {
                head: firstNode
            }
            a.add(5);
            a.add(6);
            a.remove(10);

            assert.deepEqual(a, updatedList);
        });

        it('only removes the first instance', function() {
            let firstNode = new Node(5, null);
            let updatedList = {
                head: firstNode
            }
            a.add(5);
            a.add(5);
            a.remove(5);

            assert.deepEqual(a, updatedList);
        });
    });

});


describe('Doubly Linked Linked List', function() {
    let a;
    beforeEach(function() {
        a = new DoublyLinkedList();

    });

    describe('constructor', function(){
        it('adds a null head and a null tail', function() {
            let updatedList = {
                head: null,
                tail: null
            };

            assert.deepEqual(a, updatedList);
        });
    });

    describe('add()', function() {
        it('adds the first node and sets as the head and tail', function() {
            let firstNode = new DoubleNode(5, null, null);
            let updatedList = {
                head: firstNode,
                tail: firstNode
            }

            a.add(5);
            assert.deepEqual(a, updatedList);
        });

        it('adds the second node and sets as the tail', function() {
            let secondNode = new DoubleNode(6, null, null);
            let firstNode = new DoubleNode(5, null, secondNode);
            secondNode.prev = firstNode;

            let updatedList = {
                head: firstNode,
                tail: secondNode
            }
            a.add(5);
            a.add(6);

            assert.deepEqual(a. updatedList);
        });

        it('adds the third node and sets as the tail', function() {
            let thirdNode = new DoubleNode(7, null, null);
            let secondNode = new DoubleNode(6, null, thirdNode);
            thirdNode.prev = secondNode;
            let firstNode = new DoubleNode(5, null, secondNode);
            secondNode.prev = firstNode;

            let updatedList = {
                head: firstNode,
                tail: thirdNode
            }
            a.add(5);
            a.add(6);
            a.add(7);

            
            assert.deepEqual(a, updatedList);
        });
    });

    describe('remove()', function() {
        it('removes the first node', function() {
            let updatedList = {
                head: null,
                tail: null
            }
            a.add(5);
            a.remove(5);

            assert.deepEqual(a. updatedList);
        });

        it('removes the second node', function() {
            let firstNode = new DoubleNode(5, null, null);

            let updatedList = {
                head: firstNode,
                tail: firstNode
            }
            a.add(5);
            a.add(6);
            a.remove(6);

            assert.deepEqual(a, updatedList);
        });

        it('removes the third node', function() {
            let secondNode = new DoubleNode(6, null, null);
            let firstNode = new DoubleNode(5, null, secondNode);
            secondNode.prev = firstNode;

            let updatedList = {
                head: firstNode,
                tail: secondNode
            }
            a.add(5);
            a.add(6);
            a.add(7);
            a.remove(7);

            assert.deepEqual(a, updatedList);
        });

        it("doesn't remove if it can't find a match", function() {
            let secondNode = new DoubleNode(6, null, null);
            let firstNode = new DoubleNode(5, null, secondNode);
            secondNode.prev = firstNode;

            let updatedList = {
                head: firstNode,
                tail: secondNode
            }
            a.add(5);
            a.add(6);
            a.remove(10);
            
            assert.deepEqual(a, updatedList);
        });

        it('only removes the first instance', function() {
            let firstNode = new DoubleNode(5, null, null);
            let updatedList = {
                head: firstNode,
                tail: firstNode
            }
            a.add(5);
            a.add(5);
            a.remove(5);

            assert.deepEqual(a, updatedList);
        });
        
    });


});
