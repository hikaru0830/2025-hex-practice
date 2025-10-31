const input = document.querySelector('#input');
const defaultInput = document.querySelector('#default');
const throttleInput = document.querySelector('#throttle');

input.addEventListener('input', (e) => {
    defaultInput.textContent = e.target.value;
});

const doThrottle = throttle((value) => {
    throttleInput.textContent = value;
}, 2000);
input.addEventListener('input', (e) => {
    doThrottle(e.target.value);
});

function throttle(callback, delay = 1000) {
    let timer;
    let callbackArgs;

    return (...args) => {
        callbackArgs = args;

        if (timer) {
            return;
        }

        callback(...callbackArgs);
        callbackArgs = null;

        timer = setTimeout(() => {
            timer = null;
            if (callbackArgs) {
                callback(...callbackArgs);
            }
        }, delay);
    }
}

