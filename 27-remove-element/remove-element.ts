function removeElement(nums: number[], val: number): number {
    let idx:number = 0;
    let k:number = nums.length;

    while(idx < k) {
        if (nums[idx] === val) {
            nums[idx] = nums[k-1];

            k--;
        } else {
            idx++;
        }
    }

    return k;
};