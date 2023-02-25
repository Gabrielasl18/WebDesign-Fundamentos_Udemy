(function () {

    var $html = document.querySelector('html');
    $btn = document.querySelector('.header-nav__hamburgger');

    $html.classList.remove('no-js');

    $btn.addEventListener('click', function () {
        $html.classList.toggle('menu-opened');
    })

}())