let title = ["Cider Lake", "Falcon Coast", "Springvale", "Thousand Wind Temple"]
let titleDesc = ["A natural freshwater lake.The lake's wide, crystalline appearance has remained unchanged for eons — so clear you can see the bottom, and cool and refreshing to drink. It is none other than these headwaters that brought Mondstadt's ciders and wines to fame and made the lake the symbol of Mondstadt that it is today.", "Stretching eastward from Windrise to the sea, Falcon coast — together with Cape Oath — shelters the sea from three sides, creating a bay that sits east of Mondstadt.Given the long coastline and shallow waters, citizens of Mondstadt often come here to enjoy a nice stroll. On occasion, you can see falcons soaring high above the blue waves that brush upon the white sand.", "A sleepy little village to the south of Mondstadt, that sits facing the lake that surrounds the city.Most of the village's residents are hunters that provide fresh meat for all the big restaurants of Mondstadt.Springvale's rustic appeal attracts many tourists. If you are lucky in your travels, you may come across a restaurant that truly knows how to bring out the best qualities of Springvale's meat.", 'A collection of temple ruins that sits northeast of Mondstadt.According to local legend, millennia ago this area was a temple for worshipping the Anemo God. Though it has been left to waste for centuries, leaving the ruins you see today. If you look closely at some of the stone pillars, you can still faintly make out some elegant carvings.This long-forgotten symbol of commemoration is engraved with the maxim "Wind brings the seeds of tales, time allows them to take root."']

let imageDesc = ["../../assets/img/map-img/Cider-Lake-image.png", "../../assets/img/map-img/Falcon-Coast-image.png", "../../assets/img/map-img/Springvale-image.png", "../../assets/img/map-img/Thousand-wind-temple.png"]
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




