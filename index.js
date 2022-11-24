let languageSelect;
let textarea;

function load() {
    languageSelect = document.querySelector("#language");
    textarea = document.querySelector("#textarea");
}

function keyup() {
    if (languageSelect.value === 'Zemin') {
        textarea.value = zasok(textarea.value);
    }
}

window.addEventListener('load', load);
window.addEventListener('keyup', keyup);
