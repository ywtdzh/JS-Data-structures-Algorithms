import MinHeap from '../MinHeap.mjs';

let heap = new MinHeap();

for (let i = 0; i < 1000; i++) {
    let num = Math.random() * 1001 - 500;
    heap.add(num);
}
let min = heap.pop();
for (let i = 0; i < 999; i++) {
    if (heap.peek() >= min) {
        min = heap.pop();
        process.stdout.write('.');
    } else {
        console.log(heap.stringify());
        throw(`Test Failed：${heap.peek()} >= ${min} should be false!`);
    }
}

let data = [];
for (let i = 0; i < 1000; i++) {
    let num = Math.random() * 1001 - 500;
    data.push(num);
}
heap = MinHeap.makeHeapFromArray(data);
min = heap.pop();
for (let i = 0; i < 999; i++) {
    if (heap.peek() >= min) {
        min = heap.pop();
        process.stdout.write('.');
    } else {
        console.log(heap.stringify());
        throw(`Test Failed：${heap.peek()} >= ${min} should be false!`);
    }
}
