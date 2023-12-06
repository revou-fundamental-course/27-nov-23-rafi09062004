function navigateToPage1() {
    window.location.href = "index.html";
}
function navigateToPage2() {
    window.location.href = "index2.html";
}
function hasilhitung(){
    var panjang = document.getElementById("datap").value;
    var tinggi = document.getElementById("datat").value;
    var intpanjang = parseInt(panjang)
    var inttinggi = parseInt(tinggi)
    document.getElementById("hasil").innerHTML = (intpanjang + inttinggi)/2;
}
function hasilhitung2(){
    var sisia = document.getElementById("dataA").value;
    var sisib = document.getElementById("dataB").value;
    var sisic =document.getElementById("dataC").value;
    var inta = parseInt(sisia)
    var intb = parseInt(sisib)
    var intc = parseInt(sisic)
    document.getElementById("hasil2").innerHTML = intc + intb + inta;
}