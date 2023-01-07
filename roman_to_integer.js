/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let n = 0;
    const charArray = s.split('');
    charArray.forEach((char, index) => {
        const nextChar = charArray[index + 1] || null;
        const prevChar = charArray[index - 1] || null;

        switch(char) {
            case 'I':
                !nextChar || (nextChar !== 'V' && nextChar !== 'X') ? 
                n++ : nextChar === 'V' ? 
                n += 4 : n += 9;
            break;
            case 'V':
                !prevChar || prevChar !== 'I' ? n += 5 : n = n;
            break;
            case 'X': 
                prevChar && prevChar === 'I' ? n = n : 
                !nextChar || (nextChar !== 'L' && nextChar !== 'C') ? 
                n += 10 : 
                nextChar === 'L' ? 
                n += 40 : n += 90;
            break;
            case 'L':
                prevChar && prevChar === 'X' ? n = n : n += 50;
            break;
            case 'C':
                prevChar && prevChar === 'X' ? n = n :
                !nextChar || (nextChar !== 'D' && nextChar !== 'M') ? 
                n += 100 :
                nextChar === 'D' ? 
                n += 400 : n += 900;
            break;
            case 'D': 
                prevChar && prevChar === 'C' ? n = n : n += 500;
            break;
            case 'M': 
                prevChar && prevChar === 'C' ? n = n : n += 1000;
            break;
        }
    })
    return n;
};