console.log(Math.PI);
var button = document.getElementById('send');

button.onclick = click;

function myPi()
{
	let Pi = 0;
	var I = document.getElementById('value').value;
	for (let k = 0; k<I; k++)
	{
		Pi += 1/Math.pow(16, k) * (4/(8*k+1) - 2/(8*k+4) - 1/(8*k+5) - 1/(8*k+6));
	}
	let a = Math.pow(10, I);
	console.log(parseInt(Pi * a) / a);
}

function click()
{
	myPi();
}