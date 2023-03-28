let title = ["Liyue Harbor", "Dihua Marsh", "Qingce Village", "Jueyun Karst"]
let titleDesc = ["The establishment of the harbor kicked off Liyue's seafaring trade. As Teyvat's largest market harbor, the sheer amount of goods that flow to and from it is simply incomparable for other ports.Every year during the Lantern Rite you can see thousands of lanterns ascend into the night sky — a Liyue event that you can't afford to miss.", '"Dihua Marsh, a wetland area north of Liyue, gets its name from the silvergrass ("dihua" in the local language) that grows in the shallows of the marsh.The scrambling web of rivers has grown into a flourishing and wide-spread ecosystem full of flora and fauna — an awe-inspiring sight for travelers to the area.The area also acts as the road from Mondstadt to Liyue, and as such many merchant caravans choose to stop here to rest. Wangshu Inn stands within the area, a symbolic structure from all directions."', "At the northernmost point of Liyue, hidden between the hills and the bamboo forests sits Qingce Village.White rolling clouds that sit in the valleys between the mountains are embellished with row upon row of crescent-moon water paddies.When the wind blows, the ripples in the water give off an array of colors.", "Dizzying peaks that sit shrouded in mist and clouds in the northwest of Liyue.The area hides many stunning views, but owing to tracks found on the complex paths leading up the peaks, a legend has formed that the hidden home of the Adepti lies somewhere in the area. Though another factor may simply be the hopes of those that seek blessings from the Adepti.Given the dangers within, the area is not suitable for outsiders. Best viewed from afar at Wangshu Inn."]

let imageDesc = ["../../assets/img/map-img/Liyue-harbor-image.png", "../../assets/img/map-img/Dihua-Marsh-image.png", "../../assets/img/map-img/Qingce-village-image.png", "../../assets/img/map-img/Jueyun-karst-image.png"]
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




