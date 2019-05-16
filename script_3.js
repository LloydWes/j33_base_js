function build_pyramide(number){
	let numberOfSpaces = 0;
	let numberOfHashtag = 0;
	let printString = "";
	for(floor=1; floor<=number; floor++){
		numberOfSpaces = number - floor;
		//Print spaces
		for(i=0; i<numberOfSpaces; i++){
			printString += " ";
		}
		//Print '#'
		numberOfHashtag = floor;
		for(i=0; i<numberOfHashtag; i++){
			printString += "#"
		}
		console.log(printString);
		printString = "";
	}
 
}

console.log("---------Début exo 3---------");
let n = prompt("Salut, combien d'étage veux-tu ?");
build_pyramide(n);
console.log("---------Fin exo 3---------");
