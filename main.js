var est=0;
var peso=0;
var imc=0;
function calcularIMC(){
    peso=prompt("Ingrese su peso su peso en KG...")
    est=prompt("Ingrese su estatura en M...")


    imc= peso / (est*est);

    alert("Su IMC es= " + imc)
    if (imc<18.5) {       
        alert("Su IMC es bajo")       
    } else if (imc>18.5 && imc<25){
        alert("Su imc es normal")
    } else if (imc>25 && imc<30){
        alert("Su IMC es sobrepeso")
    } else if (imc>30){
        alert("Su imc es obeso")
    }  
}

