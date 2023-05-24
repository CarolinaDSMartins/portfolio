$(document).ready(function(){

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    $('.burger-mobile').on('click', function(){
        $(this).toggleClass('active');
        $('header nav').toggleClass('active');
    });
    
});