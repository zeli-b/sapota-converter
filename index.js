let languageSelect;
let textarea;
let boldCheck;
let italicCheck;
let keyboardLayout;

function updateLayout(to) {
    keyboardLayout.src = `./res/layouts/${to}.png`;
}

function load() {
    languageSelect = document.querySelector("#language");
    textarea = document.querySelector("#textarea");
    boldCheck = document.querySelector("#bold");
    italicCheck = document.querySelector("#italic");
    keyboardLayout = document.querySelector("#keyboard-layout");

    updateLayout(languageSelect.value);
    languageSelect.addEventListener('change', e => {
        updateLayout(e.target.value);
    });

    boldCheck.addEventListener('click', e => {
        if (e.target.checked) {
            textarea.style.fontWeight = "bold";
        } else {
            textarea.style.fontWeight = "normal";
        }
    });

    italicCheck.addEventListener('click', e => {
        if (e.target.checked) {
            textarea.style.fontStyle = "italic";
        } else {
            textarea.style.fontStyle = "";
        }
    });
}

function keyup() {
    if (languageSelect.value === 'Zemin') {
        textarea.value = zasok(textarea.value);
    } else if (languageSelect.value === 'Rusimez') {
        textarea.value = rusimez(textarea.value);
    }
}

window.addEventListener('load', load);
window.addEventListener('keyup', keyup);
