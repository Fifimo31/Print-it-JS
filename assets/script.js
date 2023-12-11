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
console.log(slides[0].image)

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
emplacementFleche();

// Récupérer les éléments flecheGauche et flecheDroite en dehors de la fonction défilementImage pour les rendre accessibles globalement

const flecheGauche = document.querySelector(".arrow_left");

const flecheDroite = document.querySelector(".arrow_right");


const défilementImage = () => {
    let i = 0;

    // Ajouter un écouteur d'événement sur la flèche droite
    flecheDroite.addEventListener("click", (e) => {
        // Incrémenter l'index pour passer à la prochaine image
       // i = (i + 1) % slides.length;
        i++;
	    console.log(i)
	    if(i >= slides.length){
		    i=0;
	    }
        afficherImageCourante();
        
        
    });

    // Ajouter un écouteur d'événement sur la flèche gauche
    flecheGauche.addEventListener("click", (e) => {
        // Décrémenter l'index pour revenir à l'image précédente
        //i = (i - 1 + slides.length) % slides.length;
        i--;
	    if(i < 0){
		i = slides.length - 1;
		}
        afficherImageCourante();
        
        
    });

	 // Fonction pour afficher l'image courante
	 const afficherImageCourante = () => {
        const banner = document.getElementById("banner");
        const imageCourante = slides[i].image;
        const tagLineCourante = slides[i].tagLine;
        const bannerTexte = document.querySelector("#banner p")
        
       if (!document.querySelector('#banner-img')){
	        banner.insertAdjacentHTML('afterbegin', `<img id="banner-img" src="assets/images/slideshow/${imageCourante}">`)
	    }else {
		    banner.firstElementChild.setAttribute('src', `assets/images/slideshow/${imageCourante}`)
	        }
        bannerTexte.innerHTML = (tagLineCourante);
    };

    afficherImageCourante();

};

défilementImage();

const miseEnPlaceDots = () => {
    const dots = document.querySelector(".dots")
    const dotIndividuels = document.querySelectorAll(".dot")
    
    for (let numDot =0; numDot < slides.length; numDot++ ){
        dots.insertAdjacentHTML('afterbegin', '<div class="dot"></div>');
    }

    const selectionDots = () => {
        dotIndividuels.forEach((dot, index) => {
            if (index === i) {
                dot.classList.add('dot_selected');
            } else {
                dot.classList.remove('dot_selected');
            }
        })
        
    }
    selectionDots()
}
miseEnPlaceDots()