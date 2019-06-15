// for the slider

let slideIndex = 0;
const plusSlides = n=>{
     showSlides(slideIndex += n);
}
const showSlides = () => {
    // console.log("i am slide");
        let slides = document.querySelectorAll(".mySlides");
        // console.log(slides,slides.length);
        for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }   
    slides[slideIndex-1].style.display = "block";  
   setTimeout(showSlides, 5000); // Change image every 2 seconds
}
showSlides();

