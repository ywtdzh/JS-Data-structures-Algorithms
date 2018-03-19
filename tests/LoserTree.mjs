import LoserTree from '../LoserTree.mjs';

const messages = [];

const data = [];
data.length = 300;
data.forEach((d, index) => (data[index] = Math.random() * 1001 - 500));

const minLoserTree = new LoserTree(data);
let minValue = minLoserTree.getWinner();

for (let i = 0; i < data.length - 1; i++) {
    let newValue = minLoserTree.getWinner();
    if (minValue > newValue) {
        messages.push(`Test Failed：${newValue} >= ${minValue} should be false!`);
        process.stdout.write('E');
    }
    else {
        minValue = newValue;
        process.stdout.write('.');
    }
}

const maxLoserTree = new LoserTree(data, (a, b) => b - a);
let maxValue = maxLoserTree.getWinner();

for (let i = 0; i < data.length - 1; i++) {
    let newValue = maxLoserTree.getWinner();
    if (maxValue < newValue) {
        messages.push(`Test Failed：${newValue} <= ${maxValue} should be false!`);
        process.stdout.write('E');
    }
    else {
        maxValue = newValue;
        process.stdout.write('.');
    }
}
