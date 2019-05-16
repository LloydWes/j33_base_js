function factorial(number){
	n = 0
	if (number == 0 || number == 1)
		return 1;
	else
		return n = factorial(number - 1) * number;
}



console.log("---------Début exo 2---------");
let number = prompt("Entre un chiffre :");
console.log(factorial(number));
console.log("---------Fin exo 2---------");
