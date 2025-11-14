function majorityElement(nums: number[]): number {
    const frequency = {};

    for (const num of nums) {
        frequency[num] = (frequency[num] || 0) + 1;
    }

    for (const p in frequency) {
        if (frequency[p] > nums.length / 2) return +p;
    }
};