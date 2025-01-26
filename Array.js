class Aray {
    constructor(...args) {
        this._array = { ...args };
        this.length = args.length;
    }

    map(cb) {
        let output = [];
        for (let i = 0; i < this.length; i++) {
            output[i] = cb(i, this._array[i])
        }

        return output;
    }

    forEach(cb) {
        for (let i = 0; i < this.length; i++) {
            cb(i, this._array[i])
        }
    }

    filter(cb) {
        let output = [];
        let index = 0;
        for (let i = 0; i < this.length; i++) {
            const shouldFilterOut = cb(i, this._array[i])
            if(!shouldFilterOut) {
                output[index] = this._array[i];
                index++;
            }
        }

        return output;
    }

    push(element) {
        this._array[this.length] = element;
        this.length += 1;

        return this._array;
    }

    pop() {
        if (this._array[this.length - 1] === undefined) {
            return undefined;
        }
        delete this._array[this.length - 1];
        this.length -= 1;
    }
}

const array = new Aray(1,2,3,4);
array.forEach(console.log);
console.log(array.map((_, item) => item + item))
console.log(array.filter((_, item) => item % 2))
console.log(array.filter((_, item) => item % 2))
