function deepCopy(target) {
    if (typeof target !== 'object') return target;
    let result;
    if (target instanceof Array) result = [];
    else result = {};
    for (const key in target) {
        if (target.hasOwnProperty(key))
            result[key] = deepCopy(target[key]);
    }
    return result;
}

export default deepCopy;
