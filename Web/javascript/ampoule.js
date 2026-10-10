/*******************************************************************************
 *
 * Nom : ampoule.js
 * Date et auteur :
 *      Binafou Fofana
 *		Créé le 23/09/2026
 *
 * Description :
 *		Fichier JavaScript du TP initiation à JavaScript
 *		allume / éteint l'ampoule à chaque clic sur l'image
 *
 *******************************************************************************/


function OnOffAmpoule()
{
	const image = document.getElementById("ampoule");

	// search() renvoie la position de "bulbon" dans le nom du fichier, ou -1
	if (image.src.search("bulbon") != -1)
	{
		image.src = "images/pic_bulboff.gif";
	}
	else
	{
		image.src = "images/pic_bulbon.gif";
	}
}
