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
let imageTagline = slides.length
const banner = document.getElementById("banner")
const bannerP = document.querySelector("#banner p")

const affichageDots = () => {
	const dots = document.querySelector(".dots")
	for(let i = 0; i< imageTagline; i++){
		dots.insertAdjacentHTML('afterbegin', '<div class="dot"></div>')
	}
	
}
affichageDots()


const affichageImage = (i = 0) => { 
	
	

	if (!document.querySelector('#banner-img')){ 
		
		banner.insertAdjacentHTML('afterbegin', `<img id="banner-img" src="assets/images/slideshow/${slides[i].image}">`)// ça permet d'injecter du code html on peut l'injcter à l'intérrieur ou au début ou a la fin
																																//on a utiliser la concaténation dans le code html

	}
	else {
		
		banner.firstElementChild.setAttribute('src', `assets/images/slideshow/${slides[i].image}`) 

	}
	let affichageTagline = `${slides[i].tagLine}`
	bannerP.innerHTML = affichageTagline
	
	const dotIndividuelle = document.querySelectorAll(".dot")
	console.log(dotIndividuelle)

	dotIndividuelle.forEach((dot, index) => {
		if (index === i) {
		  dot.classList.add('dot_selected');
		} else {
		  dot.classList.remove('dot_selected');
		}
	  });
	
	  return i

}



const affichageFleche = () => {
	
    
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
    banner.appendChild(flecheGauche);
    banner.appendChild(flecheDroite);

	flecheGauche.addEventListener('click', () => {

	})


}
affichageFleche()
const flecheGauche = document.querySelector(".arrow_left")
const flecheDroite = document.querySelector(".arrow_right")

const defillementSlide = () => {
	let imageCourante = affichageImage()
	
	flecheDroite.addEventListener("click",() => {
		imageCourante++
		console.log(imageCourante)
		if(imageCourante>= imageTagline){
		imageCourante=0;
		}
		affichageImage(imageCourante) 
		
	})

	flecheGauche.addEventListener("click",() => {
		imageCourante--
		if(imageCourante < 0){
			imageCourante = imageTagline - 1;
			}
			affichageImage(imageCourante)
			
	})

}
defillementSlide()




