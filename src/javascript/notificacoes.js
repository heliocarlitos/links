function MostrarNotificacaoes() {
    document.getElementById("Notificacaoes").style.display = "block";
}
function FecharNotificacaoes() {
    document.getElementById("Notificacaoes").style.display = "none";
}
// 
function ActNot(){
    EstamosContratando.style.display = "flex";
    FerramentasParaPC.style.display = "flex";
    document.getElementById("SemNotific").style.display = "none";
}
//
function FecharEstamosContratando() {
    const EstamosContratando = document.getElementById("EstamosContratando").style.display = "none";
    MostrarNotficVazias();
}
// 
function FecharFerramentasParaPC() {
    const FerramentasParaPC = document.getElementById("FerramentasParaPC").style.display = "none";
    MostrarNotficVazias();
}
// 
function MostrarNotficVazias() {
    if (EstamosContratando.style.display == "none" && FerramentasParaPC.style.display == "none") {
        document.getElementById("SemNotific").style.display = "block";
    }
}
