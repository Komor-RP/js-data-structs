class DoubleNode {
    constructor(val, prev, next) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(a) {
        if (this.head) {
            let tail = this.tail; 
            let newNode = new DoubleNode(a, tail, null);
            this.tail.next = newNode;
            this.tail = newNode;
             
            
        } else {
            this.head = new DoubleNode(a, null, null);
            this.tail = this.head;
        }
    }
}

module.exports = {
    DoubleNode,
    DoublyLinkedList
}