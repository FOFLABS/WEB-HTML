/*******************************************************************************
 *
 * Nom : exercices.js
 * Date et auteur :
 *      Binafou Fofana
 *		Créé le 23/09/2026
 *
 * Description :
 *		Fichier JavaScript du TP initiation à JavaScript
 *		Ecrireture des fonctions pour calculer la suite de Fibonacci et la fonction range()
 *
 *******************************************************************************/


// Fonction Appeler_Fibonacci :
//		- appelée par un événement javascript depuis une page html (comme "onclick")
//      - lit le rang n dans l'entrée html
//		- appelle la fonction Fibonacci()
function Appeler_Fibonacci()
{
	// lecture de la valeur saisie qui est convertie en nombre
	const n = Number(document.forms["fibonacci"]["n"].value);
	
	// appel de la fonction Fibonacci
	let fibo = Fibonacci(n);
	
	// affichage du résultat dans la page html
	let resultat = document.getElementById("resultat_fibonacci").innerHTML = "Résultat : Fibonacci(" + n + ") = " + fibo;
}

// Retourne/renvoie la suite de Fibonacci au rang n
function Fibonacci(n)
{
	// contrôle du paramètre n
	if (!Number.isInteger(n) || n<0)
	{    
		return undefined;
	}
	
	// cas particulier
	if (n==0)
	{
		return 0;
	}

	// cas général
	let fibo2 = 0;
	let fibo1 = 0;
	let fibo = 1;
	for(let i=1; i<n; i++)
	{
		fibo2 = fibo1;
		fibo1 = fibo;
		fibo = fibo1 + fibo2;
	}
	return fibo; 
}


// Fonction Appeler_Range :
//		- appelée par un événement javascript depuis une page html (comme "onclick")
//      - lit les données dans les entrées html
//		- appelle la fonction Range()
function Appeler_Range()
{
	// lecture des valeurs saisies qui sont converties en nombres
	const saisieStop  = document.forms["range"]["stop"].value;
	const saisieStart = document.forms["range"]["start"].value;
	const saisieStep  = document.forms["range"]["step"].value;

	// conversion en nombres ; un champ vide vaut undefined afin que
	// les valeurs par défaut de Range (start=0, step=1) s'appliquent
	const stop  = Number(saisieStop);
	const start = (saisieStart === "") ? undefined : Number(saisieStart);
	const step  = (saisieStep  === "") ? undefined : Number(saisieStep);

	// appel de la fonction Range
	let tableau = Range(stop, start, step);

	// affichage du résultat dans la page html
	let resultat = document.getElementById("resultat_range").innerHTML = "Range = [" + tableau.join(", ") + "]";

}


// Fonction Range(stop, start=0, step=1)
// Retourne/Renvoie le tableau des entiers compris entre start (inclus) et 
// stop (exclu) avec un pas de step.
function Range(stop, start=0, step=1)
{
	// construction du tableau
	let tableau = [];
	for (let i = start; i < stop; i += step)
	{
		tableau.push(i);
	}
	
	return tableau;
}
