function rotateString(s: string, goal: string): boolean {
    return s.length === goal.length && s.concat(s).includes(goal);
};

/** 
 * The description says: A shift on s consists of moving the leftmost character of s to the rightmost position.
 * So if we merge the string into itself, it will have all the possible cases of the result of shifting.
*/