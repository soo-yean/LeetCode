function buildArray(nums: number[]): number[] {
    let result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        // let idx = nums[i];
        result.push(nums[nums[i]]);
    }

    return result;
};
