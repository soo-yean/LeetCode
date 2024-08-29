function longestCommonPrefix(strs: string[]): string {

    /** assume the first string is the prefix and compare with other strings in the given array */
    let prefix = strs[0]; 

    for (let i = 1; i < strs.length; i++) {

        /** if the current prefix is not at the start of the string,
         * reduce the prefix by slicing off the last character until it matches
         * or return "" if the string becomes empty. */
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix === '') return '';
        }
    }

    return prefix;
};
