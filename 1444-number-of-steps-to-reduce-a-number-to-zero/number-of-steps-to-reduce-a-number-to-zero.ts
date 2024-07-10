function numberOfSteps(num: number): number {
    let count:number = 0;

    if (num === 0) return num;

    do {
        if (num % 2 === 0) {
            num = num/2;
        } else {
            num = num-1;
        }
        count++;
    } while (num > 0);

    return count;
};