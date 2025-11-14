function majorityElement(nums: number[]): number {
    const frequency = {};

    for (const num of nums) {
        frequency[num] = (frequency[num] || 0) + 1;

        if (frequency[num] > nums.length / 2) return +num;
    }
};