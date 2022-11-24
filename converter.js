function zasok(string) {
    let words = [
        'g', 'n', 'm', 's', 'j',
        '\u{E000}=', 'd', 'v', 'z', '\u{E004}=',
        '\u{E005}=', 'l', '\u{E002}==', 'x', '\u{E009}=',
        'k', 't', 'p', 'c', 'h',
        '\u{E000}h', '\u{E001}h', '\u{E002}h', '\u{E003}h', '\u{E004}h',
        '\u{E000}g', 'r', '\u{E000}m', '\u{E000}s', '\u{E000}j',
        '\u{E001}n', 'f', '\u{E001}s', '\u{E001}j',
        '\u{E002}m', '\u{E002}s', '\u{E002}j',
        '\u{E003}s', '\u{E003}j',
        '\u{E004}j',
        'a', 'y', 'o', 'u', 'i', 'w', 'e', '\u{E02E}=',
        "\u{E028}'", "\u{E029}'", "\u{E02A}'", "\u{E02B}'", "\u{E02C}'", "\u{E02D}'", "\u{E02E}'", "\u{E02F}'", 
        '\u{E028}"', '\u{E029}"', '\u{E02A}"', '\u{E02B}"', '\u{E02C}"', '\u{E02D}"', '\u{E02E}"', '\u{E02F}"', 
        '\u{E028}-', '\u{E029}-', '\u{E02A}-', '\u{E02B}-', '\u{E02C}-', '\u{E02D}-', '\u{E02E}-', '\u{E02F}-', 
        "\u{E030}''", "\u{E031}''", "\u{E032}''", "\u{E033}''", "\u{E034}''", "\u{E035}''", "\u{E036}''", "\u{E037}''", 
    ];

    for (let i = 0; i < words.length; i++) {
        if (!(typeof words[i] === 'string')) break;

        words.push([words[i].toUpperCase(), i + 0x50]);
        words[i] = [words[i], i];
    }

    words.sort((a, b) => b[0].length - a[0].length).forEach(wordAndIndex => {
        let word = wordAndIndex[0];
        let index = wordAndIndex[1];
        string = string.replaceAll(word, String.fromCharCode(0xE000 + index));
    });

    let result = ''
    for (let i = 0; i < string.length; i++) {
        result += ' ' + string.charCodeAt(i).toString(16);
    }
    console.log(result);

    return string;
}
