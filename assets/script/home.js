let kazuhaMove = document.getElementById("kazuha-move");

window.addEventListener("scroll", function(){
    if(window.pageYOffset > 300){
        // detect if windows width is bigger than 768 px then do the animation
        if(window.innerWidth > 768){
            kazuhaMove.classList.add("kazuha-move");
            kazuhaMove.style.opacity = "1";
            return;
        }
    }
});

const panahKiri = document.getElementById('panah-kiri')
const image = document.getElementById('image')
const panahKanan = document.getElementById('panah-kanan')

let imageArray = [
    '../assets/img/weapons-1.png',
    '../assets/img/weapons-2.png',
    '../assets/img/weapons-3.png'
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