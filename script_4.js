const entrepreneurs = [
{ first: 'Steve', last: 'Jobs', year: 1955 },
{ first: 'Oprah', last: 'Winfrey', year: 1954 },
{ first: 'Bill', last: 'Gates', year: 1955 },
{ first: 'Sheryl', last: 'Sandberg', year: 1969 },
{ first: 'Mark', last: 'Zuckerberg', year: 1984 },
{ first: 'Beyonce', last: 'Knowles', year: 1981 },
{ first: 'Jeff', last: 'Bezos', year: 1964 },
{ first: 'Diane', last: 'Hendricks', year: 1947 },
{ first: 'Elon', last: 'Musk', year: 1971 },
{ first: 'Marissa', last: 'Mayer', year: 1975 },
{ first: 'Walt', last: 'Disney', year: 1901 },
{ first: 'Larry', last: 'Page', year: 1973 },
{ first: 'Jack', last: 'Dorsey', year: 1976 },
{ first: 'Evan', last: 'Spiegel', year: 1990 },
{ first: 'Brian', last: 'Chesky', year: 1981 },
{ first: 'Travis', last: 'Kalanick', year: 1976 },
{ first: 'Marc', last: 'Andreessen', year: 1971 },
{ first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("---------Début exo 4---------");
//Affiche les entrepreneurs née dans les années 70
let bornIn70Array = new Array();
entrepreneurs.forEach(function(entrepreneur){
	if (entrepreneur.year >= 1970 && entrepreneur.year <= 1979){
		bornIn70Array.push(entrepreneur);
	}
	// words.filter(word => word.year == 1970);
});
console.log(bornIn70Array);

//Affiche les noms prénoms des entrepreneurs
let nameArray = new Array();
entrepreneurs.forEach(function(entrepreneur){
	nameArray.push({first: entrepreneur.first, last: entrepreneur.last});
});
console.log(nameArray);

//Affiche les ages
let currentYear = 2019;
entrepreneurs.forEach(function(entrepreneur){
	console.log(entrepreneur.first + " " + entrepreneur.last + " a (ou aurait) " + (currentYear - entrepreneur.year) + " ans.");
});

//Trie les entrepreneurs
entrepreneurs.sort(function(a,b){
	if (a.last > b.last)
		return 1;
	else if (a.last < b.last)
		return -1;
	else
		return 0;
});
console.log(entrepreneurs)

console.log("---------Fin exo 4---------");