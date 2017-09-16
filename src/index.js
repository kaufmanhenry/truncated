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
        if (!Array.isArray(array)) throw Error('An array is required to truncate.');
        if (!array.every(element => typeof element==='string')) {
            throw Error('All elements in an array passed to truncated() must be strings.');
        }
        if (hasDuplicates(array)) {
            throw Error('An array passed to truncated() must not contain duplicates at the start.');
        }

        let depth = 1;
        let truncatedArray;
        do {
            truncatedArray = array.map(element => {
                return element.substring(0,depth);
            });
            depth++;
        } while (hasDuplicates(truncatedArray));

        return truncatedArray;
    };

    /**
     * Returns true if an array contains duplicate
     * @param array
     * @returns {boolean} Contains duplicates
     */
    const hasDuplicates = (array) => {
        let uniques = [];
        for (let i=0;i<array.length;i++) {
            if (uniques.indexOf(array[i])>=0) return true;
            uniques.push(array[i]);
        }
        return false;
    };

    return truncated;
}));