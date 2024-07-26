function reverseWords(s: string): string {

    let wordsArr: string[] = s.split(' ');
    for (let i = 0; i <wordsArr.length; i++) {
        wordsArr[i] = wordsArr[i].split('').reverse().join('');
    }

    return wordsArr.join(' ')
};