/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    /**
    * //await promise1 waits for promise1 to resolve, and await promise2 will execute and wait again. Then it adds the two results
    * return await promise1 + await promise2; 
    */

    // Promise.all runs both promises in parallel(await waits until both are resolved, but they run concurrently).    
    const [val1, val2] = await Promise.all([promise1, promise2]); 
    return val1 + val2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */