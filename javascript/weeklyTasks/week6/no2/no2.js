function timeoutCounter(start, end) {
	let current = start;
	console.log(current, new Date(), 'TIMEOUT');
	current++;
	if (current <= end) {
		setTimeout(() => {
				timeoutCounter(current, end);
		}, 1000);
	}
}

function intervalCounter(start, end) {
	let current = start;
	console.log(current++, new Date(), 'INTERVAL');
    const interval = setInterval(() => {
		if (current <= end) {
			console.log(current++, new Date(), 'INTERVAL');
		}
		else{
			clearInterval(interval);
		}
	}, 1000);
}

timeoutCounter(0, 5);
intervalCounter(0, 5);

// Output 輸出(兩者相同)
// 0
// 1
// 2
// 3
// 4
// 5