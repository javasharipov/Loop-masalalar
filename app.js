// LOOP Masalalar
{
	//  masala1
	let n = 4,
		k = 78
	for (let i = 0; i < n; i++) {
		console.log(k)
	}
}

{
	// masala2

	let a = 4,
		b = 10

	for (let i = a; i <= b; i++) {
		console.log(i)
	}
}

{
	// masala3

	let a = 5,
		b = 12
	for (let i = 11; i > a; i--) {
		console.log(i)
	}
}

{
	// masala 4
	for (let kg = 1; kg <= 10; kg++) {
		let price = kg * 12
		console.log(kg + ' kg konfet narxi: ' + price + ' UZS')
	}
}

{
	//  masala 5
	let priceKg = 12

	for (let kg = 0.1; kg <= 1; kg += 0.1) {
		let price = kg * priceKg
		console.log(kg + ' kg konfet narxi: ' + price + ' UZS')
	}
}

{
	// masala 6
	let priceKg = 12

	for (let kg = 1.1; kg <= 2; kg += 0.2) {
		let price = kg * priceKg
		console.log(kg + ' kg konfet narxi: ' + price + ' UZS')
	}
}
{
	// masala 7
	let a = 0

	for (i = a; i <= 10; i++) {
		if (i >= 5) {
			a = i + a
		}
	}

	console.log(a)
}

{
	// masala 8
	let a = 1
	for (i = 5; i <= 10; i++) {
		a *= i
	}
	console.log(a)
}

{
	//  masala 9
}

{
	// masala 10

	let n = 7,
		s = 0
	for (let i = 1; i <= n; i++) {
		s += 1 / i
	}
	console.log(s)
}
