function laske() {
    var eka, toka, tulos;
    eka = parseInt(document.getElementById("ekaluku").value);
    toka = parseInt(document.getElementById("tokaluku").value);
    
    if(document.getElementById("plus").checked == true) {
      tulos = eka + toka;
    }else{
      tulos = eka - toka;
    }
    document.getElementById("tulos").innerHTML = tulos;
  }