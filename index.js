let languageSelect;
let textarea;
let boldCheck;
let italicCheck;

function load() {
    languageSelect = document.querySelector("#language");
    textarea = document.querySelector("#textarea");
    boldCheck = document.querySelector("#bold");
    italicCheck = document.querySelector("#italic");

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
    } else if (languageSelect.value === 'Lusimez') {
        textarea.value = lusimez(textarea.value);
    }
}

window.addEventListener('load', load);
window.addEventListener('keyup', keyup);
