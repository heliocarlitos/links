// Função chamada quando o usuário aceita os cookies
function aceitarCookies() {
    var avisoDeCookie = document.getElementById('AvisoDeCookie');
    avisoDeCookie.classList.add('slideOut');
    setTimeout(function() {
        avisoDeCookie.style.display = 'none';
    }, 500);
    localStorage.setItem('cookiesAceitos', 'true');
}
// Função chamada quando o usuário rejeita os cookies
function rejeitarCookies() {
    window.history.back();
}
window.onload = function() {
    var avisoDeCookie = document.getElementById('AvisoDeCookie');
    if (!localStorage.getItem('cookiesAceitos')) {
        avisoDeCookie.style.display = 'flex';
        setTimeout(function() {
            avisoDeCookie.classList.add('slideIn');
        }, 100);
    }
}
// JS Para Ver foto de Perfil
function VerFoto() {
    document.getElementById("VendoFotoDePerfil").style.display = "flex";
}
// JS Para Fechar foto de Perfil
function FecharFoto() {
    document.getElementById("VendoFotoDePerfil").style.display = "none";
}
// JS Para Ver Menu de Três Pontos
function VerMenuTresPontos() {
    document.getElementById("MenuTresPontos").style.display = "flex";
}
// JS Para Fechar Menu de Três Pontos
function FecharMenuTresPontos() {
    document.getElementById("MenuTresPontos").style.display = "none";
}