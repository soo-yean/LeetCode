function getConcatenation(nums: number[]): number[] {
    let ans: number[] = []

    ans.push(...nums, ...nums)

    return ans;
};