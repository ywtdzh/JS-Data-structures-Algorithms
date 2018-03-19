const LoserTree = (function () {

    // properties
    const properties = new WeakMap();

    // static const variables
    const absoluteLoser = Infinity;
    const absoluteWinner = -Infinity;

    // private methods
    function adjustLeafNode(nodeIndex) {
        const props = properties.get(this);
        let loserPosition = Math.floor(nodeIndex / 2), winnerIndex = nodeIndex;
        while(loserPosition > 0) {
            if (props.comparator(props.nodes[winnerIndex], props.nodes[props.nodes[loserPosition]]) > 0) {
                // original winner loses
                let temp = props.nodes[loserPosition];
                props.nodes[loserPosition] = winnerIndex;
                winnerIndex = temp;
            }
            loserPosition = Math.floor(loserPosition / 2);
        }
        props.nodes[0] = winnerIndex;
    }

    function initTree() {
        const props = properties.get(this);
        for(let i = props.nodes.length / 2; i < props.nodes.length; i++) { // for each leaf nodes, adjust tree
            adjustLeafNode.call(this, i);
        }
    }

    class LoserTree {
        constructor(arrays, comparator) {
            const props = {};
            const leaves = [];
            arrays.forEach(array => leaves.push(array.shift() || absoluteLoser));
            props.arrays = arrays;
            const noneLeafNodes = [];
            comparator = comparator || ((a, b) => (a > b ? 1 : a === b ? 0 : -1));
            props.comparator = (a, b) => {
                // null identify the minimum value, while NaN identify the maximum value
                if (a === b) return 0;
                else if (a === absoluteLoser || b === absoluteWinner) return -1;
                else if (b === absoluteLoser || a === absoluteWinner) return 1;
                else return comparator(a, b);
            };
            leaves.forEach(() => noneLeafNodes.push(absoluteWinner));
            props.nodes = noneLeafNodes.concat(leaves);
            props.nodes[absoluteLoser] = absoluteLoser;
            props.nodes[absoluteWinner] = absoluteWinner;
            properties.set(this, props);
            initTree.call(this);
        }

        getWinner() {
            const props = properties.get(this);
            const result = props.nodes[props.nodes[0]];
            props.nodes[props.nodes[0]] = props.arrays[props.nodes[0]] || absoluteLoser;
            adjustLeafNode.call(this, props.nodes[0]);
            return result;
        }

    }

    return LoserTree;
})();

export default LoserTree;
