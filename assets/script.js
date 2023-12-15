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
const affichageImage = () => {
    const banner = document.getElementById("banner")
    let affichageImage =`<img id="img-banner" src="assets/images/slideshow/${slides[0].image}">` 
    banner.innerHTML = affichageImage

}

affichageImage()

