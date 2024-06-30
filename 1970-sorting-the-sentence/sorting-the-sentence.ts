function sortSentence(s: string): string {
    let tempArr = [];
    const strToArr = s.split(" ");

    for (let i = 0; i < strToArr.length; i++) {
        let index = strToArr[i].slice(-1);
        tempArr[index] = strToArr[i].slice(0, -1);
    }

    let result = tempArr.join(" ").trim();
    return result;
};