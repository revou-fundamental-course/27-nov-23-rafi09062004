function navigateToPage1() {
    window.location.href = "index.html";
}
function navigateToPage2() {
    window.location.href = "index2.html";
}
function hasilhitung(){
    var panjang = document.getElementById("data-p").value;
    var tinggi = document.getElementById("data-t").value;
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
function resetInputBoxh1() {
    document.getElementById("data-p").value = '';
    document.getElementById("data-t").value = '';
    document.getElementById("hasil").innerHTML= '';
}
document.getElementById("data-p").document.getElementById("data-t").addEventListener("click", resetInputBoxh1);
document.getElementById("hasil").innerHTML.addEventListener("click", resetInputBoxh1);

function resetInputBoxh2() {
    document.getElementById("dataA").value = '';
    document.getElementById("dataB").value = '';
    document.getElementById("dataC").value='';
    document.getElementById("hasil2").innerHTML= '';
}
document.getElementById("dataA").document.getElementById("dataB"). document.getElementById("dataC").addEventListener("click", resetInputBoxh2);
document.getElementById("hasil2").innerHTML.addEventListener("click", resetInputBoxh2);


