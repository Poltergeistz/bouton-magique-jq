var species = {
	cat    : "cat.jpg",
	bear   : "bear.jpg",
	fish   : "fish.jpg"
};

$('<img src="" />').appendTo('#holder'); // créé au lancement de la page une nouvelle balise <img src="" /> dans la div holder.

function main(){
	$(":button").click(function(){
		var animal = $(this).attr('data-animal'); // variable animal qui récupère l'attribut dans le data animal.
		$('img').attr('src', 'img/' + species[animal]);
		console.log(species[animal])
	})
	/* 
	tout votre code doit se trouver dans cette fonction,
	vous pouvez biensur créer d'autres fonctions si nécessaire
	*/

	// 1. placez un listener sur le click des éléments <button>
	// 2. dans le callback récupérez le data attribute animal
	// 3. récupérerez dans l'objet species la valeur correspond à l'attribut récupéré
	// 4. ajoutez élément img en assignant à son attibut src la valeur précédemment récupérée
	// 5. inserez cet élément dans l'élément ayant l'id holder
	// 
	// Conseils : avancez étape par étape, console.log et debugger autant que nécessaires !
	
	
	 
}

$(document).ready(function(){
	main();
});