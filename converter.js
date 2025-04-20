function zasok(string) {
    let words = [
        'G', 'N', 'M', 'S', 'J',
        '\u{e000}=', 'D', 'V', 'Z', '\u{e004}=',
        '\u{e005}=', 'L', '\u{e002}==', 'X', '\u{e009}=',
        'K', 'T', 'P', 'C', 'H',
        '\u{e000}H', '\u{e001}H', '\u{e002}H', '\u{e003}H', '\u{e004}H',
        '\u{e000}\u{e000}=', 'R', '\u{e000}\u{e002}=', '\u{e000}\u{e003}=', '\u{e000}\u{e004}=',
        '\u{e001}\u{e001}=', 'F', '\u{e001}\u{e003}=', '\u{e001}\u{e004}=',
        '\u{e002}\u{e002}=', '\u{e002}\u{e003}=', '\u{e002}\u{e004}=',
        '\u{e003}\u{e003}=', '\u{e003}\u{e004}=',
        '\u{e004}\u{e004}=',
        'A', 'Y', 'O', 'U', 'I', 'W', 'E', '\u{e02e}=',
        "\u{e028}`", "\u{e029}`", "\u{e02a}`", "\u{e02b}`", "\u{e02c}`", "\u{e02d}`", "\u{e02e}`", "\u{e02f}`",
        '\u{e028}"', '\u{e029}"', '\u{e02a}"', '\u{e02b}"', '\u{e02c}"', '\u{e02d}"', '\u{e02e}"', '\u{e02f}"',
        '\u{e028}-', '\u{e029}-', '\u{e02a}-', '\u{e02b}-', '\u{e02c}-', '\u{e02d}-', '\u{e02e}-', '\u{e02f}-',
        "\u{e028}'", "\u{e029}'", "\u{e02a}'", "\u{e02b}'", "\u{e02c}'", "\u{e02d}'", "\u{e02e}'", "\u{e02f}'",
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

    string = string.replaceAll("", String.fromCharCode(0xe0bf));
    string = string.replaceAll("=", String.fromCharCode(0xe0a0));
    string = string.replaceAll("=", String.fromCharCode(0xe0a1));

    return string;
}

function rusimez(string) {
    let consonants = ['g', 'k', 'n', 'd', 't', 'l', 'r', 'm', 'b', 'p', 's', "x", 'z', 'c', 'f', 'h'];
    let vowels = ['a', 'y', 'e', 'o', 'u', 'w', 'i', 'ja', 'jy', 'je', 'jo', 'ju', 'va', 'vy', 've', 'vo', 'vi'];

    for (let i = 0; i < consonants.length; i++) {
        let consonant = String.fromCharCode(0xe116 + 0x11*i);
        string = string.replaceAll(consonants[i], consonant);
        for (let j = vowels.length-1; j >= 0; j--) {
            if (vowels[j] === 'w') continue;
            string = string.replaceAll(consonant + vowels[j], String.fromCharCode(0xe111 + 0x11*i + j));
        }
    }

    for (let i = vowels.length-1; i >= 0; i--) {
        string = string.replaceAll(vowels[i], String.fromCharCode(0xe100 + i));
    }

    return string;
}

const erangLatin = '1234567890-qwertyuiopasdfghjklzxcvbnm,.!@#$%^&*()_QWERTYUIOPASDFGHJKLZXCVBNM<>';
const erangErang = '';
function erang(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        let index = erangLatin.indexOf(letter);

        if (index === -1) {
            result += letter;
        } else {
            result += erangErang[index];
        }
    }

    return result;
}

function uarnamala(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        let letter = string[i];

        if ('A' <= letter && letter <= "Z") {
            result += String.fromCharCode(letter.charCodeAt(0) + 0xe240 - 0x40);
        } else if ('a' <= letter && letter <= "z") {
            result += String.fromCharCode(letter.charCodeAt(0) + 0xe2b0 - 0x60);
        } else {
            result += letter;
        }
    }

    return result;
}

function tugjan(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        let letter = string[i];

        if ('A' <= letter && letter <= "Z") {
            result += String.fromCharCode(letter.charCodeAt(0) + 0xe0c0 - 0x40);
        } else if ('a' <= letter && letter <= "z") {
            result += String.fromCharCode(letter.charCodeAt(0) + 0xe0e0 - 0x60);
        } else if ('0' <= letter && letter <= '4') {
            result += String.fromCharCode(letter.charCodeAt(0) + 0xe0db - 0x30);
        } else if ('5' <= letter && letter <= '9') {
            result += String.fromCharCode(letter.charCodeAt(0) + 0xe0fb - 0x35);
        } else if (letter === '.') {
            result += String.fromCharCode(0xe0c0);
        } else if (letter === ',') {
            result += String.fromCharCode(0xe0e0);
        } else {
            result += letter;
        }
    }

    return result;
}

function luhari(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if ('a' <= string[i] && string[i] <= 'z') {
            let code = string.charCodeAt(i) - 96 + 0x2d0;

            let letter = String.fromCharCode(code);
    
            result += letter;
        }
        else
        {
            result += string[i];
        }
    }

    return result;
}
