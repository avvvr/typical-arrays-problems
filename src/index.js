exports.min = function min(array) {
    if (array === undefined || array.length === 0)
        return 0;
    else {
        let minValue = Number.MAX_VALUE;
        for (let i = 0; i < array.length; i++) {
            if (array[i] < minValue)
                minValue = array[i];
        }
        return minValue;
    }
}

exports.max = function max(array) {
    if (array === undefined || array.length === 0)
        return 0;
    else {
        let maxValue = Number.MIN_VALUE;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > maxValue)
                maxValue = array[i];
        }
        return maxValue;
    }
}

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0)
        return 0;
    else {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
    }
}
