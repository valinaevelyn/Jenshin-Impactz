const panahKiri = document.getElementById('panah-kiri')
const image = document.getElementById('image')
const panahKanan = document.getElementById('panah-kanan')

let imageArray = [
    '../assets/img/about-image/screenshot-1.png',
    '../assets/img/about-image/screenshot-2.png',
    '../assets/img/about-image/screenshot-3.png',
    '../assets/img/about-image/screenshot-4.png',
    '../assets/img/about-image/screenshot-5.png',
    '../assets/img/about-image/screenshot-6.png'
]

image.src = imageArray[0]

let posisi = 0;

const panahKananGerak = ()=>{
    if(posisi >= imageArray.length-1){
        posisi = 0;
        image.src = imageArray[posisi]
    }
    image.src = imageArray[posisi+1]

    posisi++
}

const panahKiriGerak = ()=>{
    if(posisi < 1){
        posisi = imageArray.length-1;
        image.src = imageArray[posisi]
    }
    image.src = imageArray[posisi-1]
    posisi--
}

panahKiri.addEventListener("click", panahKiriGerak)
panahKanan.addEventListener("click", panahKananGerak)

let slideIndex = 0
show()

function show(){
    let i
    let slides = document.getElementsByClassName("slider")
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    slideIndex++;
    if(slideIndex > slides.length){
        slideIndex = 1
    }
    slides[slideIndex-1].style.display = "block"
    setTimeout(show, 3000)
}