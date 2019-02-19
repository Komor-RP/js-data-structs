class Queue {
    constructor(...items) {
        this.queue = [...items];
    }
    
    enqueue(a) {
        return this.queue.push(a);
    }

    dequeue() {
        return this.queue.shift();
    }
}

module.exports = {
    Queue
};