
$(document).ready(function() {


    
    
    let slideAtual = 1;
    let listaSlides = ["bnn1", "bnn2", "bnn3"]

    setInterval(mudarSlide, 1500)

    function mudarSlide() {
        console.log("Slide atual:", slideAtual);

        // Remove o slide anterior
        if (slideAtual > 0) {
            $("#carrossel").removeClass(listaSlides[slideAtual - 1])
        } else if (slideAtual == 0) {
            $("#carrossel").removeClass(listaSlides[ (listaSlides.length) - 1 ])
        }

        // Adiciona o slide atual
        $("#carrossel").addClass(listaSlides[slideAtual]);

        // Indica o slide atual
        slideAtual++

        if(slideAtual > (listaSlides.length) - 1) {
            slideAtual = 0;
        }

    }
    
    $("#barras").click(function() {

        $("#menu").toggleClass("menu-ativo");
        
        // Toggle
        // if( $("#menu").hasClass("menu-ativo") ) {
        //     $("#menu").removeClass("menu-ativo")
        // } else {
        //     $("#menu").addClass("menu-ativo")
        // }

    })

})

function mostrarMenu() {
    let menu = document.getElementById("menu")

    if (getComputedStyle(menu).display == 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}

function cadastrarNewsletter() {
    let email = document.getElementById("campo-email").value

    alert(email)
    console.log(email)
}


function logar() {
    let emaillogin = document.getElementById("emaillog").value

if (emaillogin==0) {
    alert('digite um email')
}
else{

    alert(emaillogin)
    console.log(emaillogin)}
}






// DOM - Document Object Model