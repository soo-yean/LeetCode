function romanToInt(s: string): number {
    const romanToIntMap: {[key: string]: number} = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        const curr = romanToIntMap[s[i]];
        const next = romanToIntMap[s[i + 1]];

        if (next && curr < next) {
            sum += (next - curr);
            i++;
        } else {
            sum += curr;
        }
    }

    return sum;
};