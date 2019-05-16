//Retourne un string avec des '-' entre chaque codons
function getCodons(str){
	let chaine = Array.from(str);
	// console.log(typeof chaine);
	// console.log(chaine);
	let countTo3 = 0;
	for(i=0; i<chaine.length; i++){
		if (countTo3==3){
			chaine.splice(i,0, '-');
			countTo3 = -1;
		}
		countTo3++;
	}
	return chaine.join('');
}

function getAminoAcid(str){
	let aminoConvertionArray = [ // Tableau qui contient un couple nom, valeurs prise par l'acide aminé en question
	{name: "Sérine", values: ['UCU', 'UCC', 'UCA', 'UCG', 'AGU', 'AGC']},
	{name: "Proline", values: ['CCU', 'CCC', 'CCA', 'CCG']},
	{name: "Leucine", values: ['UUA', 'UUG']},
	{name: "Phénylalanine", values: ['UUU', 'UUC']},
	{name: "Arginine", values: ['CGU', 'CGC', 'CGA', 'CGG', 'AGA', 'AGG']},
	{name: "Tyrosine", values: ['UAU', 'UAC']}
	];
	let matchAminoObj = null;
	matchAminoObj = aminoConvertionArray.find(function(amino){
		return amino.values.find(function(v){
			return v == str;
		});
});
	return matchAminoObj.name; // On renvoi le nom de l'acide aminé qui correspond au codons
}

function getFinalString(str){
	let finalStr = "";
	str.split('-').forEach(function(codons){
		finalStr += getAminoAcid(codons) + '-';
	});

	return finalStr.substring(0, finalStr.length-1);
}

function getProtein(str){
	let formatedToCodons = getCodons(str.toUpperCase()); // Ici on formate la chaine reçus pour lui ajouter les '-' tous les 3 caractères (pas de gestion d'erreur si la longueur de la chaine n'est pas multiple de 3)
	return getFinalString(formatedToCodons); // 
}

console.log("---------Début exo 6---------");
console.log(getProtein("CCGUCGUUGCGCUACAGC"));
console.log(getProtein("CCUCGCCGGUACUUCUCG"));
console.log("---------Fin exo 6---------");
