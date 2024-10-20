// fix Headers

window.addEventListener('scroll', function(){
    var header = document.getElementById('header');
    if(window.scrollY > 0){
        header.classList.add('header-fix');
    }else{
        header.classList.remove('header-fix');
    }

});