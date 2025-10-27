const input = document.querySelector('#input');
const defaultInput = document.querySelector('#default');
const debounceInput = document.querySelector('#debounce');

input.addEventListener('input', (e) => {
    defaultInput.textContent = `Default: ${input.value}`;
});

input.addEventListener('input', debounce(() => {
    debounceInput.textContent = `Debounce: ${input.value}`;
}, 1000));

function debounce(callback, delay = 1000) {
    let timer;

    return (...args) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    }
}

