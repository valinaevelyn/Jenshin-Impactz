let characterFace = document.getElementById("character-face");
let faceInfo = document.getElementById("face-info");

let geserItem = document.querySelectorAll(".geser-item");

for(let i = 0; i < geserItem.length; i++){
    geserItem[i].addEventListener("click", function(){
        for(let j = 0; j < geserItem.length; j++){
            geserItem[j].classList.remove("active");
        }
        geserItem[i].classList.add("active");
        characterFace.querySelector("img").src = `../assets/img/character-image/1-${i+1}.png`;
        faceInfo.querySelector("img").src = `../assets/img/character-image/2-${i+1}.png`;

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
}



let characterFace2 = document.getElementById("character-face-2");
let faceInfo2 = document.getElementById("face-info-2");

let geserItem2 = document.querySelectorAll(".geser-item-2");

for(let i = 0; i < geserItem2.length; i++){
    geserItem2[i].addEventListener("click", function(){
        for(let j = 0; j < geserItem2.length; j++){
            geserItem2[j].classList.remove("active");
        }
        geserItem2[i].classList.add("active");
        characterFace2.querySelector("img").src = `../assets/img/character-image/2-1-${i+1}.png`;
        faceInfo2.querySelector("img").src = `../assets/img/character-image/2-2-${i+1}.png`;

        window.scrollTo({
            // scroll to container 2
            top: 800,
            left: 0,
            behavior: 'smooth'
        });
    });
}

let characterFace3 = document.getElementById("character-face-3");
let faceInfo3 = document.getElementById("face-info-3");

let geserItem3 = document.querySelectorAll(".geser-item-3");

for(let i = 0; i < geserItem3.length; i++){
    geserItem3[i].addEventListener("click", function(){
        for(let j = 0; j < geserItem3.length; j++){
            geserItem3[j].classList.remove("active");
        }
        geserItem3[i].classList.add("active");
        characterFace3.querySelector("img").src = `../assets/img/character-image/3-1-${i+1}.png`;
        faceInfo3.querySelector("img").src = `../assets/img/character-image/3-2-${i+1}.png`;

        window.scrollTo({
            // scroll to container 2
            top: 1620,
            left: 0,
            behavior: 'smooth'
        });
    });
}

let characterFace4 = document.getElementById("character-face-4");
let faceInfo4 = document.getElementById("face-info-4");

let geserItem4 = document.querySelectorAll(".geser-item-4");

for(let i = 0; i < geserItem4.length; i++){
    geserItem4[i].addEventListener("click", function(){
        for(let j = 0; j < geserItem4.length; j++){
            geserItem4[j].classList.remove("active");
        }
        geserItem4[i].classList.add("active");
        characterFace4.querySelector("img").src = `../assets/img/character-image/4-1-${i+1}.png`;
        faceInfo4.querySelector("img").src = `../assets/img/character-image/4-2-${i+1}.png`;

        window.scrollTo({
            // scroll to container 2
            top: 2400,
            left: 0,
            behavior: 'smooth'
        });
    });
}


