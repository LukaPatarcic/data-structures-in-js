/**
 * Queue
 */
class Queue {
    constructor(props) {
        this._storage = {};
        this._length = 0;
        this._head = 0;
    }

    /**
     * Add a new item to the top of the stack
     * @param item {any}
     */
    enqueue(item) {
        const lastIndex = this._length + this._head;
        this._storage[lastIndex] = item;
        this._length++;
    }

    /**
     * Remove the item from the top of the stack
     * @returns {void}
     */
    dequeue() {
        // get first element
        delete this._storage[this._head];
        this._length--;
        this._head++;
    }

    /**
     * Return the item on the top of the stack
     * @return {undefined|*}
     */
    peek() {
        return this._storage[this._head];
    }

}

const myQueue = new Queue();

myQueue.enqueue('one');
myQueue.enqueue('two');
console.log(myQueue.peek())

myQueue.dequeue()
myQueue.enqueue('three')
// myQueue.enqueue('three');

console.log(myQueue.peek())

console.log(myQueue)
