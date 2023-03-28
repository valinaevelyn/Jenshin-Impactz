let title = ["Chinju Forest", "Inazuma City", "Musoujin Gorge", "Nazuchi Beach"]
let titleDesc = ["A tranquil and mysterious forest located at the foot of Mt. Yougou.Here one can find Tanuki statues everywhere, torii gates scattered throughout the forest, and abandoned shrines hidden in the depths... Like a flowing river, they tell of legends meandering into a forgotten past.Rumor has it that when walking in Chinju Forest, you may encounter mysterious beings who like to play pranks...", "Inazuma's most lively and prosperous area, where most of Inazuma's population lives. From Hanamizaka to the streets of the city, you can follow the trail to visit local traditional shops and sample Inazuma specialties.The Tenryou Commission is also located in the city, governing matters concerning public order and security, as well as the Shogunate's military affairs.At the top of Inazuma City is Tenshukaku, where the Raiden Shogun resides and rules over Inazuma.", "This narrow and majestic rift valley runs through the eastern part of Yashiori Island.This extraordinary sight is no natural formation, but rather is the result of the fight in which the Electro Archon slayed the giant serpent. The rift valley is named after the Musou no Hitotachi, a testament to the Electro Archon's skilled swordsmanship.To this day, the remains of the giant serpent are still scattered throughout Yashiori Island. The Tatarigami that emerged from this god's remains seem to be awakening...", "Located between Yashiori Island and Kannazuka, Nazuchi Beach is a place ravaged by war. On the shallow coast, apart from Violet Ibis looking for a place to rest, there are torn flags and broken arrows of prior battles, as well as broken masts and shattered decks of shipwrecks.As a result of the war, pirates and ronin infest the place searching for loot. Even the rare Dendrobium blooms in this place..."]

let imageDesc = ["../../assets/img/map-img/Chinju-forest-image.png", "../../assets/img/map-img/inazuma-city-image.png", "../../assets/img/map-img/Musoujin-gorge-image.png", "../../assets/img/map-img/Nazuchi-beach-image.png"]
let mapsContent = document.querySelectorAll(".maps-content")
console.log(mapsContent)

let explainTitle = document.getElementById("explainTitle")
let explainDesc = document.getElementById("explainDesc")
let explainImage = document.getElementById("explainImage")
let nextMapText = document.querySelector(".text")
let nextMapIndex = 0
for(let i = 0; i < mapsContent.length; i++){
    mapsContent[i].addEventListener("click", () =>{
        explainTitle.innerHTML = title[i]
        nextMapText.innerHTML = title[i]
        explainDesc.innerHTML = titleDesc[i]
        explainImage.src = imageDesc[i]
        nextMapIndex = i;
        console.log(nextMapIndex)

        for(let j = 0; j < mapsContent.length; j++){
            mapsContent[j].classList.remove("active")
        }

        mapsContent[i].classList.add("active")
    })
}



let prev = document.querySelector(".clickBefore")
let next = document.querySelector(".clickAfter")
console.log(prev)
// prev.addEventListener("click", ()=>{
//     console.log("OHOs")
// })
prev.addEventListener("click", ()=>{
    if(nextMapIndex > 0){
        nextMapIndex--;
    }
    explainTitle.innerHTML = title[nextMapIndex]
    nextMapText.innerHTML = title[nextMapIndex]
    explainDesc.innerHTML = titleDesc[nextMapIndex]
    explainImage.src = imageDesc[nextMapIndex]
    for (let i = 0; i < mapsContent.length; i++) {
        mapsContent[i].classList.remove("active")
    }
    mapsContent[nextMapIndex].classList.add("active")
})

next.addEventListener("click", ()=>{
    if(nextMapIndex < mapsContent.length - 1){
        nextMapIndex++;
    }
    explainTitle.innerHTML = title[nextMapIndex]
    nextMapText.innerHTML = title[nextMapIndex]
    explainDesc.innerHTML = titleDesc[nextMapIndex]
    explainImage.src = imageDesc[nextMapIndex]
    for (let i = 0; i < mapsContent.length; i++) {
        mapsContent[i].classList.remove("active")
    }
    mapsContent[nextMapIndex].classList.add("active")
})




