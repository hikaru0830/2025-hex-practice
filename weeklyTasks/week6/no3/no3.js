const input = document.querySelector('#input');
const defaultInput = document.querySelector('#default');
const debounceInput = document.querySelector('#debounce');

input.addEventListener('input', (e) => {
    defaultInput.textContent = e.target.value;
});

const doDebounce = debounce((value) => {
    debounceInput.textContent = value;
}, 1000)
input.addEventListener('input', (e) => {
    doDebounce(e.target.value);
});

function debounce(callback, delay = 1000) {
    let timer;

    return (...args) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    }
}

