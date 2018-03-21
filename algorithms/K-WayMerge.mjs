import LoserTree from '../structures/LoserTree.mjs';

function K_way_Merge(k, array, comparator) {
    const arr = [];
    Object.assign(arr, array);
    return _k_merge_handler(k, arr, comparator);
}

function _k_merge_handler(k, arr, comparator) {
    const length = arr.length;
    const data = [];
    while(arr.length > 0) {
        data.push(arr.splice(0, Math.ceil(length / k)));
    }
    data.forEach((dataArray, index)=>{
        if(dataArray.length > 1) {
            data[index] = _k_merge_handler(k, dataArray, comparator);
        }
    });
    const loserTree = new LoserTree(data, comparator);
    const result = [];
    while(!loserTree.isEmpty()) {
        result.push(loserTree.getWinner());
    }
    return result;
}

export default K_way_Merge;