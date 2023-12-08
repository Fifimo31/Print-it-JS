const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const emplacementFleche = () => {
    const bannerFleche = document.getElementById("banner");
    
    // Créer l'élément image pour la flèche gauche
    const flecheGauche = document.createElement("img");
    flecheGauche.src = "assets/images/arrow_left.png";
    flecheGauche.alt = "Flèche gauche";
    flecheGauche.classList.add("arrow_left");

    // Créer l'élément image pour la flèche droite
    const flecheDroite = document.createElement("img");
    flecheDroite.src = "assets/images/arrow_right.png";
    flecheDroite.alt = "Flèche droite";
    flecheDroite.classList.add("arrow_right");

    // Ajouter les flèches au document
    bannerFleche.appendChild(flecheGauche);
    bannerFleche.appendChild(flecheDroite);
};

// Appeler la fonction


const défilementImage = (slides) => {
	emplacementFleche();
	slides[0]
	let flecheDroite = document.querySelector("arrow_right")
	
	flecheDroite.addEventListener("click",(e) => {
		for(let i = 0; i< slides.length; i++){
			console.log(slides.length)
		
		}
	})
	
	
}
défilementImage(slides)
