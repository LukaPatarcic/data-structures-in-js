/**
 * LinkedList class
 */
class LinkedList {
    /**
     * Constructor
     * @param value {any}
     */
    constructor(value) {
        this._head = { value, next: null};
        this._tail = this._head;
    }

    /**
     * Insert a new value to the linked list
     * @param value {any}
     */
    insert(value) {
        const node = { value, next: null };
        this._tail.next = node;
        this._tail = node;
    }

    removeTail() {
        let currentNode = this._head;

        while (currentNode.next !== this._tail) {
            currentNode = currentNode.next;
        }

        currentNode.next = null;
        this._tail = currentNode;

    }

    /**
     * 
     * @param value
     * @return {boolean}
     */
    contains(value) {
        let currentNode = this._head;

        while (currentNode.next !== this._tail) {
            currentNode = currentNode.next;
        }

        return currentNode.value === value;
    }

    isHead(node) {
        return this._head === node;
    }

    isTail(node) {
        return this._tail === node;
    }
}

const myLinkedList = new LinkedList('one');

myLinkedList.insert('two')
myLinkedList.insert('three')
myLinkedList.insert('four')
console.log(myLinkedList)
