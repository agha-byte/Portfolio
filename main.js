// Adding event listeners to socials
const totalSocials = document.querySelectorAll(".social-container > *");
const fb = document.getElementById("fb");
const insta = document.getElementById("insta");
const lkdn = document.getElementById("lkdn");



for (let i =0; i<totalSocials.length; i++){
    totalSocials[i].addEventListener("mouseover", function(event){
      
        console.log(event.type)
        setImages(this.alt, event.type)
    })
    document.querySelectorAll(".social-container > *")[i].addEventListener("mouseout", function(event){
       setImages(this.alt, event.type);
        
    })
}

function setImages (alt, eventType) {
    if (alt == "facebook logo"){
        if (eventType == "mouseover"){
            fb.setAttribute("src", "./assets/fbHover.png");
        }else {
            fb.setAttribute("src", "./assets/facebook.svg");
        }
    }else if (alt == "instagram logo"){
        if (eventType =="mouseover"){
            insta.setAttribute("src", "./assets/instaHover.png");
        }else {
            insta.setAttribute("src", "./assets/instagram.svg");
        }
    }else {
        if (eventType == "mouseover"){
            lkdn.setAttribute("src", "./assets/lkdnHover.png")

        }else {
            lkdn.setAttribute("src", "./assets/linkedin.svg")
        }
    }
}
