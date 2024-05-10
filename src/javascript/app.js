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

// JS PARA MOSTRAR O SIS. WINDOWS
function MostrarSistemasWindows() {
    document.getElementById("SistemasWindows").style.display = "flex";
}
function FecharSistemasWindows() {
    document.getElementById("SistemasWindows").style.display = "none";
}
// JS PARA MOSTRAR O SIS. ANDROID
function MostrarSistemasAndroid() {
    document.getElementById("SistemasAndroid").style.display = "flex";
}
function FecharSistemasAndroid() {
    document.getElementById("SistemasAndroid").style.display = "none";
}
// JS PARA MOSTRAR PROGRAMAS ÚTEIS
function MostrarProgramasUteis() {
    document.getElementById("ProgramasUteis").style.display = "flex";
}
function FecharProgramasUteis() {
    document.getElementById("ProgramasUteis").style.display = "none";
}
// JS PARA MOSTRAR APLICATIVOS ÚTEIS
function MostrarAplicativosUteis() {
    document.getElementById("AplicativosUteis").style.display = "flex";
}
function FecharAplicativosUteis() {
    document.getElementById("AplicativosUteis").style.display = "none";
}
