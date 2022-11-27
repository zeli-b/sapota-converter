function zasok(string) {
    let words = [
        'G', 'N', 'M', 'S', 'J',
        '\u{e000}=', 'D', 'V', 'Z', '\u{e004}=',
        '\u{e005}=', 'L', '\u{e002}==', 'X', '\u{e009}=',
        'K', 'T', 'P', 'C', 'H',
        '\u{e000}H', '\u{e001}H', '\u{e002}H', '\u{e003}H', '\u{e004}H',
        '\u{e000}G', 'R', '\u{e000}M', '\u{e000}S', '\u{e000}J',
        '\u{e001}N', 'F', '\u{e001}S', '\u{e001}J',
        '\u{e002}M', '\u{e002}S', '\u{e002}J',
        '\u{e003}S', '\u{e003}J',
        '\u{e004}J',
        'A', 'Y', 'O', 'U', 'I', 'W', 'E', '\u{e02e}=',
        "\u{e028}'", "\u{e029}'", "\u{e02a}'", "\u{e02b}'", "\u{e02c}'", "\u{e02d}'", "\u{e02e}'", "\u{e02f}'",
        '\u{e028}"', '\u{e029}"', '\u{e02a}"', '\u{e02b}"', '\u{e02c}"', '\u{e02d}"', '\u{e02e}"', '\u{e02f}"',
        '\u{e028}-', '\u{e029}-', '\u{e02a}-', '\u{e02b}-', '\u{e02c}-', '\u{e02d}-', '\u{e02e}-', '\u{e02f}-',
        "\u{e030}''", "\u{e031}''", "\u{e032}''", "\u{e033}''", "\u{e034}''", "\u{e035}''", "\u{e036}''", "\u{e037}''",
    ];

    for (let i = 0; i < words.length; i++) {
        if (!(typeof words[i] === 'string')) break;

        let lowercase = "";
        for (let j = 0; j < words[i].length; j++) {
            if (0xE000 <= words[i].charCodeAt(j)) {
                lowercase += String.fromCharCode(words[i].charCodeAt(j) + 0x50);
            } else {
                lowercase += words[i][j].toLowerCase();
            }
        }
        words.push([lowercase, i+0x50]);

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
