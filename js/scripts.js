// scripts.js
var a = prompt('Enter the variable a');
var b = prompt('Enter the variable b');
var value = (a * a) + (2 * a * b) - (b * b)

if (isNaN(a) || isNaN(b) ){
	alert('At least one of the variables is not a number, enter the correct values');
}
else {
	console.log(value);
	if (value>0) {
		console.log('The result is positive.');
		alert('The result is positive.');
	}
	else if (value<0) {
		console.log('The result is negative.');
		alert('The result is negative.');
	}
	else {
		console.log('The result is equal to zero.');
		alert('The result is equal to zero.');
	}
}


