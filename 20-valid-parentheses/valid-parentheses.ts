function isValid(s: string): boolean {
    let stack:string[] = []; //using stack because the order matters.
    const charMap: {[key: string]: string} = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }

    for (let i = 0; i < s.length; i++){
        const char = s[i];
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            /**
             * if the current character is closing parenthesis/brace/bracket, check if...
             * 1) the stack is empty. If it is, return false because it will never be valid without opening.
             * 2) the top of the stack is opening character which matches with the current one.
             */
            if (stack.length === 0 || stack.pop() !== charMap[char]) {
                return false;
            }
        }
    } 
    return !stack.length;
};