const randomNumbers = [1, 8, 10, 22, 137, 31];

function isOdd(numbers) {
    return numbers.filter((x) => {
		return x % 2 !== 0;
	});
}

function isEven(numbers) {
    return numbers.filter((x) => {
		return x % 2 === 0;
	});
}

function filter(numbers, func) {
    return func(numbers);
}

console.log(filter(randomNumbers, isOdd));
console.log(filter(randomNumbers, isEven));

// Output 輸出
// [1, 137, 31]
// [8, 10, 22]