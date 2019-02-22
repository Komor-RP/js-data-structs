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
            // creates the new node
            let newNode = new DoubleNode(a, this.tail, null);
            
            // adds the new node onto the tail
            this.tail.next = newNode;

            // resets the tail to the newly added node
            this.tail = newNode;
             
            
        } else {
            // sets the first node values
            this.head = new DoubleNode(a, null, null);
            this.tail = this.head;
        }
    }

    remove(a) {
        let current  = this.head;

        while (current) {
            if (current.val === a) {

                // is this the head node or not
                if (current.prev) {
                    // sets the previous' next to the current's next
                    // to skip over the current
                    current.prev.next = current.next;
                    
                    //resets the tail if it's removed
                    if (!current.next) {
                        this.tail = current.prev;
                    }

                } else {
                    // replaces head with next value
                    this.head = current.next;

                    // resets new head's prev if there is a head node
                    if (this.head) {
                        this.head.prev = null;
                    }
                    
                }
                
                current = null;
                break;
            }
            current = current.next;
        }
    }
}

module.exports = {
    DoubleNode,
    DoublyLinkedList
}