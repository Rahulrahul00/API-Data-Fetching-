// fix Headers

window.addEventListener('scroll', function(){
    var header = document.getElementById('header');
    if(window.scrollY > 0){
        header.classList.add('header-fix');
        header.style.backgroundColor="#fff0f3";
    }else{
        header.classList.remove('header-fix');
        header.style.backgroundColor="#ffff";
    }

});