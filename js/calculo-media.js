console.log("Estou funcionando - calculo-media.js");

function calculoMedia(p1, tp1, p2, tp2) {

    if (isNaN(tp1)) {
        var mediaP1 = parseFloat(p1) + parseFloat(tp1);
    } else {
        var mediaP1 = parseFloat(p1);
    }
    if (isNaN(tp2)) {
        var mediaP2 = parseFloat(p2) + parseFloat(tp2);
    } else {
        var mediaP2 = parseFloat(p2);
    }
    var media = (mediaP1 + (mediaP2 * 2)) / 3;

    return media.toFixed(2);
}

function calculoSituacao(media) {
    var situacao;
    if (media >= 5) {
        return "Aprovado!"
    } else {
        return "Exame!"
    }
}

function reprovado(media) {
    if (media < 5) {
        return true
    } else {
        return false
    }
}