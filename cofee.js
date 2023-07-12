// var image1 = document.getElementById("image1");
// var image2 = document.getElementById("image2");
// var btnprev = document.querySelector("btnprv");
// var btnnext = document.querySelector(".btnNxt");
// var count = 0;
// var inc = 0;
window.addEventListener('scroll', () => {
    var scrolled = window.scrollY - 2500;
    var parallaxLayers = document.querySelectorAll('.parallax-layer');
    parallaxLayers.forEach(function (layer, index) {
        var speed = (index + 1) * 0.3; // Adjust the speed of each layer
        var yPos = -(scrolled * speed);
        layer.style.transform = 'translateY(' + yPos + 'px)';
    });
});
window.addEventListener('scroll', () => {
    var scrolled2 = window.scrollY - 5500;
    var parallaxlayers2 = document.querySelectorAll('.parallel');
    parallaxlayers2.forEach(function (layer2, index2) {
        var speed2 = (index2 + 1) * 0.1;
        var ypos2 = (scrolled2 * speed2);
        layer2.style.transform = 'translateY(' + ypos2 + 'px)';
    })
});
var scrollcontainer = document.getElementById("offerImageList");
let prevbtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");
scrollcontainer.addEventListener("wheel", (evt) => {
    const scrollAmount = evt.deltaY > 0 ? 100 : -100
    scrollcontainer.scrollBy({
        top: 0,
        left: scrollAmount,
        behavior: "smooth"
    });
    evt.preventDefault();

});
var screenWidth = window.innerWidth;
var per = screenWidth * 0.8;
var divwidth = 400
var wid = document.getElementById("bookmark1");
wid.innerHTML = document.documentElement.scrollTop;
nextBtn.addEventListener("click", () => {
    scrollcontainer.style.scrollBehavior = "smooth";
    scrollcontainer.scrollLeft += 400;
});
prevbtn.addEventListener("click", () => {
    scrollcontainer.style.scrollBehavior = "smooth";
    scrollcontainer.scrollLeft -= 400;
});
showImage = (imgId) => {
    var imgdiv = document.getElementById("offerdisplayContianer");
    var image = document.getElementById("modal-image");
    image.src = imgId;
    imgdiv.style.display = 'flex';

} 