function isPalindrome(s: string): boolean {
    const str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedStr = str.split('').reverse().join('');

    return str === reversedStr;
};