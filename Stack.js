/**
 * Stack data structure
 */
class Stack {
    constructor() {
        this._storage = {};
        this._length = 0;
    }

    /**
     * Add a new item to the top of the stack
     * @param item {any}
     * @returns void
     */
    push(item) {
        this._storage[this._length] = item;
        this._length++;
    }

    /**
     * Remove the item from the top of the stack
     * @returns {any}
     */
    pop() {
        if (this._length === 0) {
            return undefined;
        }

        const lastItem = this._storage[this._length - 1];
        delete this._storage[this._length - 1];
        this._length--;

        return lastItem;
    }

    /**
     * Return the item on the top of the stack
     * @return {undefined|*}
     */
    peek() {
        if (this._length === 0) {
            return undefined;
        }

        const lastItem = this._storage[this._length - 1];

        return lastItem;
    }

}

const myStack = new Stack();

myStack.push('one');
myStack.push('two');
console.log(myStack.peek())
console.log(myStack.pop());

console.log(myStack)
