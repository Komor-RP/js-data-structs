class Stack {
    constructor(...items) {
        this.stack = [...items];
    }

    push(a) {
        return this.stack.unshift(a);
    }

    pop() {
        return this.stack.shift();
    }

}

module.exports = {
    Stack
}