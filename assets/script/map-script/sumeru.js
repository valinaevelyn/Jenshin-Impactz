let title = ["Gandharva Ville", "Pardis Dhyai", "Sumeru City", "Mawtiyima Forest"]
let titleDesc = ['"The city above the forest."The city of wisdom is ours, as is the forest of ignorance. Atop the tree lies the remnants of the kingdom of lost dreams."', "The garden of deep thought.Countless flowers lie within the garden, each more lovely than the most beautiful crystalfly. This is the paradise of people of goodwill.", "TThe root of all wisdom on earth.Under the luxuriant Divine Tree, the sages of the academy city have accumulated all the knowledge there is to be gathered. Welcome to Sumeru, O Traveler seeking answers.", "The forest of enormous fluorescent mushrooms. Here, giant mushroom caps construct a canopy of light, obscuring the sun and the moon. Is this a man-made paradise, or a garden waiting to bloom?"]

let imageDesc = ["../../assets/img/map-img/Gandarva-village-image.png", "../../assets/img/map-img/Pardis dai.png", "../../assets/img/map-img/Sumeru-city.png", "../../assets/img/map-img/mawtiwa-forest-image.png"]
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




