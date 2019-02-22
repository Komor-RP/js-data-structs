class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    add(a) {
        if (!a) {
            throw new TypeError("Values cannot be null");
        }

        // finds the head and sets it if it doesn't exist
        if (this.head) {

            // finds the end value by traversing the linked list
            // and attaches a new Node onto it
            let current = this.head;
            while (current) {

                if (current.next === null) {
                    current.next = new Node(a, null);
                    break;
                }
                
                current = current.next;
            }

        } else {

            this.head = new Node(a, null);
        }
    }

    remove(a) {
        if (!a) {
            throw new TypeError("Values cannot be null");
        }

        let current = this.head;
        let prior;

        while (current) {
            if (current.val === a) {

                // set prior.next to current.next
                if (prior) {
                    prior.next = current.next;
                } else {
                    this.head = this.head.next;
                }
                
                // set current to null
                current = null;
                break;
            }
            prior = current;
            current = current.next;
        }
    }

}


module.exports = {
    SinglyLinkedList,
    Node
}