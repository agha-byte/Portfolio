// Adding event listeners to socials
const totalSocials = document.querySelectorAll(".social-container > *").length;
console.log(totalSocials);
for (let i =0; i<totalSocials; i++){
    document.querySelectorAll(".social-container > *")[i].addEventListener("mouseover", function(event){
       setHoverImages(this.alt);
        
    })
    document.querySelectorAll(".social-container > *")[i].addEventListener("mouseout", function(event){
       setDefaultImages(this.alt)
        
    })
}

function setHoverImages (alt) {
    if (alt == "facebook logo"){
        document.getElementById("fb").setAttribute("src", "./assets/fbHover.png")
    }else if (alt == "instagram logo"){
        document.getElementById("insta").setAttribute("src", "./assets/instaHover.png")

    }else {
        document.getElementById("lkdn").setAttribute("src", "./assets/lkdnHover.png")

    }
}
function setDefaultImages (alt) {
    if (alt == "facebook logo"){
        document.getElementById("fb").setAttribute("src", "./assets/facebook.svg")
    }else if (alt == "instagram logo"){
        document.getElementById("insta").setAttribute("src", "./assets/instagram.svg")

    }else {
        document.getElementById("lkdn").setAttribute("src", "./assets/linkedin.svg")

    }
}