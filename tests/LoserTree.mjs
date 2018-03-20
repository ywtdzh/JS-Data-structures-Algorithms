import LoserTree from '../LoserTree.mjs';

const messages = [];

const data = [[], [], [], [], []];
data.forEach(array => {
    let base = -75;
    array.length = 300;
    array.forEach((e,index)=>{
        array[index] = base += Math.random();
    });
});

const minLoserTree = new LoserTree(data);
let minValue = minLoserTree.getWinner();

for (let i = 0; i < 1499 - 1; i++) {
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
