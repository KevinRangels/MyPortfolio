//SCROLL REVEAL
window.sr = ScrollReveal();
sr.reveal('.main__header__title-der span',{
    duration: 2000,
    origin: 'bottom',
    delay:300
    
});
sr.reveal('.main__header__title-izq span',{
    duration:3000,
    origin:'bottom',
    delay:300
});
sr.reveal('.main_header_subtitle',{
    duration:3000,
    origin:'left',
    delay:700
});
// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
/*--=============================
ANIMACIONES SCROLL PANEL         
==============================*/
var alturaHeader = $("header").height();

$(window).scroll(function(){
    var posY = window.pageYOffset;
    if(posY > alturaHeader){
        $(".app_panel_btns").css({"display":"none"});
        
    }else{
        $(".app_panel_btns").css({"display":"block"});

    }
})
console.log(alturaHeader);

