class HashTable {
    constructor(size) {
        this._storage = [];
        this._size = size;
    }

    insert(key, value) {
        const index = this._hash(key, this._size);
        if(!this._storage[index]) {
            this._storage[index] = [];
        }

        this._storage[index].push([key, value]);
    }

    retrieve(key) {
        const index = this._hash(key, this._size);
        const arrayAtIndex = this._storage[index];
        if(arrayAtIndex) {
            for (let i = 0; i < arrayAtIndex.length; i++) {
                if(arrayAtIndex[i][0] === key) {
                    return arrayAtIndex[i][1];
                }
            }
        }
    }

    remove(key) {
        const index = this._hash(key, this._size);
        const arrayAtIndex = this._storage[index];
        if(arrayAtIndex) {
            for (let i = 0; i < arrayAtIndex.length; i++) {
                if(arrayAtIndex[i][0] === key) {
                    arrayAtIndex[i].splice(i, 1);
                }
            }
        }
    }

    _hash(str) {
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += str.charCodeAt(i) * 3;
        }

        return sum % this._size;
    }
}

const hashTable = new HashTable(20);
hashTable.insert('one', 1);
hashTable.insert('two', 2);
console.log(hashTable.retrieve('one'));
hashTable.remove('two');
console.log(hashTable.retrieve('two'))
