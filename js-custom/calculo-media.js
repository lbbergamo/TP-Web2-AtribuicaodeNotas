function calculoMedia(p1, tp1, p2, tp2) {
        var mediaP1,mediaP2;
     if (!isNaN(tp1)) {
        mediaP1 = parseFloat(p1) + parseFloat(tp1);
    } else {
       var mediaP1 = parseFloat(p1);
    }
    if (!isNaN(tp2)) {
        mediaP2 = parseFloat(p2) + parseFloat(tp2);
    } else {
        mediaP2 = parseFloat(p2);
    }
    var media = ((mediaP1 + (mediaP2 * 2)) / 3);
    return media.toFixed(2);
}
function calculoSituacao(media) {
    if (media < 5 || isNaN(media)) {
       return "Exame"
    } else {
        return "Aprovado!"
    }
}
function reprovado(media) {
    if (media < 5 || isNaN(media)) {
        return true
    } else {
        return false
    }
}
function calculoMedia1(p1,tp2){
    let total = 0;
    total = parseFloat(p1) + parseFloat(tp2);
    return total.toFixed(2);
}
function calculoMedia2(mediaP1,mediaP2){
   return (mediaP1 + (mediaP2 * 2)) / 3;
}