function isValid(s: string): boolean {
    let stack:string[] = [];
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
            if (stack.length === 0 || stack.pop() !== charMap[char]) {
                return false;
            }
        }
    } 
    return !stack.length;
};