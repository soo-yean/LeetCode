function romanToInt(s: string): number {

    // Create a mapping of Roman numerals to integers
    const romanToIntMap: {[key: string]: number} = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let sum = 0; // Initialize a variable to hold the total value

    // Iterate through the string and calculate the total
    for (let i = 0; i < s.length; i++) {
        const curr = romanToIntMap[s[i]];
        const next = romanToIntMap[s[i + 1]];

        /** Loop through the string and add the value of each Roman numeral to the total.
         * if a smaller numeral comes before a larger one like 'IV' or 'IX', 
         *  a) subtract the smaller numeral from the total instead of adding it, or
         *  b) add (next - curr) value to the total and move on to next numeral
         * */
        if (next && curr < next) {
            sum -= curr; // solution (a)

            /**
             * solution (b) 
             * sum += (next - curr);
             * i++
            */
           
        } else {
            sum += curr;
        }
    }

    return sum;
};