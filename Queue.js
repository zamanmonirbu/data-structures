class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty. Cannot dequeue.");
            return;
        }
        return this.items.shift();
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Queue is empty. Cannot peek.");
            return;
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

const myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log("Peek:", myQueue.peek());
console.log("Dequeue:", myQueue.dequeue());
console.log("Peek:", myQueue.peek());
