function isPowerOfTwo(n: number): boolean {
    /** negative numbers or zero can't be a power of two */
    if (n <= 0) return false;
    
    /** divide n by 2 as long as n is divisible by 2 */
    while (n % 2 === 0) {
        n = n / 2;
    }

    /** 
     * After the loop finishes, the final check determines whether the result of all the divisions is 1.
     * if n === 1, the number was successfully divided by 2 repeatedly until it reached 1. 
     * It means the number was composed entirely of factors of 2, and thus is a power of two. 
     * */
    return n === 1; 
}
