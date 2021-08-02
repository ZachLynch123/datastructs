class Queue {
    constructor() {
        this.elemets = [];
    }
    // Add to Queue
    enqueue(e) {
        this.elemets.push(e);
    }
    // Remove element from the front of queue
    dequeue(e) {
        return this.elemets.shift();
    }
    // Check if Queue is Empty
    isEmpty() {
        return this.elemets.length == 0;
    }
    // Get element at front of Queue
    peek() {
        return !this.isEmpty() ? this.elemets[0] : undefined; // If queue isn't empty, grab element from front of Queue
    }
    // Get length of Queue
    length() {
       console.log(this.elemets.length);
    }

}

let queue = new Queue();
// Simple for loop to add 7 elements to queue
for (let i = 1; i <= 7; i++) {
    queue.enqueue(i);
}
queue.length()
queue.isEmpty()
queue.dequeue();
queue.length();



