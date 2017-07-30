/**
 * Truncates all strings in an array to the minimum length required to keep them unique.
 *
 * Uses UMD module declaration. See https://github.com/umdjs/umd/blob/master/templates/returnExports.js
 * Will load as the global function "truncate" in a browser. Will return as a node module function in node. Works with AMD.
 *
 * @module truncate Truncates all strings in an array to the minimum length required to keep them unique.
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.truncate = factory();
    }
}(this, function () {
    const truncated = (array) => {
        if (!array) return Error('An array is required to truncate.');
        let firstElements = findFirstElements(array);
        let arrayToUpdate = array;
        let occurrences = 0;

        while (hasDuplicates(firstElements)) {
            occurrences++;
            arrayToUpdate = removeFirstElements(arrayToUpdate);
            firstElements = findFirstElements(arrayToUpdate);
        }

        return array.map((a) => a.substring(0, (occurrences + 1) || a.length));
    };

    const findFirstElements = array => array.map((a) => a[0] || null);

    const removeFirstElements = array => array.map((a) => a.substring(1));

    const hasDuplicates = (array) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === null) return false;
            if (getAllIndexes(array, array[i]).length > 1) return true;
        }
        return false;
    };

    const getAllIndexes = (arr, val) => {
        let indexes = [], i = -1;
        while ((i = arr.indexOf(val, i + 1)) != -1) {
            indexes.push(i);
        }
        return indexes;
    };

    return truncated;
}));