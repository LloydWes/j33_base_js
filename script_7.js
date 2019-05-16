console.log("---------Début exo 7---------");
let entry = null;
do{
	entry = prompt("Entre un message pour le BOT (entre 'quit' pour quitter)");
	// console.log(entry);
	if(entry[entry.length-1] == '?')
		console.log("Ouais ouais...");
	else if(entry.toUpperCase() == entry && entry.length != 0)
		console.log("Pwa, calme toi la !");
	else if(entry.includes("fortnite"))
		console.log("On se fait une petite partie ?!");
	else if(entry.trim() == "" || entry == null)
		console.log("T'es en PLS ?");
	else
		console.log("Balek");
}while(entry != "quit");

console.log("---------Fin exo 7---------");