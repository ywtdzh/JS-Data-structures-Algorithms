import deepCopy from '../utils/deepCopy.mjs';
import assert from "assert";

const obj1 = {
    keyNum: 1,
    keyArray:[2,3,4],
    keyObject: {keyNum:5},
    keyMultiple: [{},{},{}]
};

const obj2 = deepCopy(obj1);
assert.notStrictEqual(obj1, obj2);
assert.strictEqual(obj1.keyNum, obj2.keyNum);
assert.notStrictEqual(obj1.keyArray, obj2.keyArray);
assert.strictEqual(obj1.keyArray[0], obj2.keyArray[0]);
assert.notStrictEqual(obj1.keyObject, obj2.keyObject);
assert.strictEqual(obj1.keyObject.keyNum, obj2.keyObject.keyNum);
assert.notStrictEqual(obj1.keyMultiple, obj2.keyMultiple);
assert.notStrictEqual(obj1.keyMultiple[0], obj2.keyMultiple[0]);
obj1.keyMultiple[0].value = 0;
assert.strictEqual(obj2.keyMultiple[0].value, undefined);
