const MinHeap = (function () {
    // properties
    const properties = new WeakMap();

    // private methods
    function downAdjust(node) {
        let heap = properties.get(this).heap;
        let index = node || 0, temp;
        while (index < heap.length) {
            if (heap[index * 2 + 1] > heap[index * 2 + 2] && heap[index] > heap[index * 2 + 2]) {
                temp = heap[index];
                heap[index] = heap[index * 2 + 2];
                heap[index * 2 + 2] = temp;
                index = index * 2 + 2;
            } else if (heap[index] > heap[index * 2 + 1]) {
                temp = heap[index];
                heap[index] = heap[index * 2 + 1];
                heap[index * 2 + 1] = temp;
                index = index * 2 + 1;
            } else {
                break;
            }
        }
    }

    function upAdjust(node) {
        let heap = properties.get(this).heap;
        let index = node || heap.length - 1, temp;
        while (index > 0) {
            if (heap[index] < heap[Math.floor((index - 1) / 2)]) {
                temp = heap[index];
                heap[index] = heap[Math.floor((index - 1) / 2)];
                heap[Math.floor((index - 1) / 2)] = temp;
                index = Math.floor((index - 1) / 2);
            } else {
                break;
            }
        }
    }

    class MinHeap {
        constructor(...values) {
            properties.set(this, {heap: values});

            for (let i = Math.floor((values.length - 2) / 2); i >= 0; i--) {
                downAdjust.call(this, i);
            }
        }

        static makeHeapFromArray(arrayOfValues) {
            if (arrayOfValues instanceof Array)
                return new MinHeap(...arrayOfValues);
            throw new SyntaxError("Invalid Argument: arrayOfValues is not an array");
        }

        addElement(e) {
            properties.get(this).heap.push(e);
            upAdjust.call(this);
            return this;
        }

        getMin() {
            return properties.get(this).heap[0] || null;
        }

        fetchMin() {
            let heap = properties.get(this).heap;
            let result = heap[0] || null;
            if (result === null) return result;
            heap[0] = heap[heap.length - 1] || null;
            heap.splice(heap.length - 1, 1);
            downAdjust.call(this);
            return result;
        }

        stringify() {
            return JSON.stringify(properties.get(this).heap);
        }

    }

    MinHeap.prototype.push = MinHeap.prototype.add = MinHeap.prototype.addElement;
    MinHeap.prototype.peek = MinHeap.prototype.get = MinHeap.prototype.getMin;
    MinHeap.prototype.remove = MinHeap.prototype.pop = MinHeap.prototype.fetchMin;
    return MinHeap;
})();


export default MinHeap;
