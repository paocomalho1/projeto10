function telaIn(){
    const tela = $(".tela")
    tela.removeClass("slide-out")
    tela.addClass("slide-in")
}
function telaOut(){
    const tela = $(".tela")
    tela.removeClass("slide-in")
    tela.addClass("slide-out")
}