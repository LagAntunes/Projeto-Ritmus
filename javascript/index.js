let botaoPlanos = document.getElementById("botaoPlanos");

botaoPlanos.onclick = function clicaBotao() {
    $('.planos').animatescroll({scrollSpeed:200,easing:'easeInQuint'});
}