function tahdet() {
    let sc = document.getElementById("starcount").value;
    let out = "";
    
    for (let x=0; x<sc; x++) { 
      out += "*";
    } 
   document.getElementById("out").innerHTML = out;
  }