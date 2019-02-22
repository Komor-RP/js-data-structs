class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(a) {
        if (!a) {
            throw new TypeError("Values cannot be null");
        }

        if (this.head) {

            let current = this.head;
            while (current) {

                if (current.next == null) {
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
            if (current.val == a) {

                // set prior.next to current.next
                if (prior) {
                    prior.next = current.next;
                } else {
                    this.head = null;
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
    LinkedList,
    Node
}