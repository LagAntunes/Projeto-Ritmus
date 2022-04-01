let botaoPlanos = document.getElementById("botaoPlanos");

botaoPlanos.onclick = function clicaBotao() {
    $('.planos').animatescroll({scrollSpeed:200,easing:'easeInQuint'});
}

let nomeForm = document.getElementById("nome");
let emailForm = document.getElementById("email");
let botaoForm = document.getElementById("botaoForm");

botaoForm.onclick = function checaForm() {
    event.preventDefault();

    if(nomeForm.value =="" && emailForm.value =="") {
        nomeForm.style.borderColor = "red"
        emailForm.style.borderColor = "red"
    } else if(nomeForm.value =="" || emailForm.value =="") {
        nomeForm.style.borderColor = "red"
        emailForm.style.borderColor = "red"
    } else {
        nomeForm.style.borderColor = "lightgreen"
        emailForm.style.borderColor = "lightgreen"
    }
    function alertTimer() {
        if(nomeForm.value != "" && emailForm.value != "") {
            alert("Logo entramos em contato. Muito obrigado por escolher a Ritmus.");
        }
    }
    setTimeout(alertTimer, 1000);
}

