function aleatoire(){
	var myNumber = document.getElementById('myNumber').value;
	var numberCroupier = Math.floor(Math.random()*11);
	var result = document.getElementById('resultat');
	var final = document.getElementById('phrase');
	result.innerHTML= numberCroupier;

if (myNumber>numberCroupier) {
	phrase.innerHTML ="vous avez gagné";
 }else{
 	phrase.innerHTML ="vous avez perdu";
 }

}

function chiffre(){
	var firstNumberUser = Math.floor(Math.random()*22);
	var resultatMyNumber = document.getElementById('resultUser');
	resultUser.innerHTML = firstNumberUser;
	var firstNumberCroupier = Math.floor(Math.random()*22);
}

function yes(){
	var twoNumberUser = firstNumberUser + Math.floor(Math.random()*22);
	var twoNomberCroupier = firstNumberCroupier + Math.floor(Math.random()*22);
	var resultatTwoNumber = document.getElementById('resultTwo');
	resultTwo.innerHTML = twoNomberUser;
}

function no(){
	document.getElementById('resultfirst').innerHTML = firstNumberCroupier
}







