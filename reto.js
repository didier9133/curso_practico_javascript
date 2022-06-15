const lado1=4;
const lado2=4;
const lado3=6;

var suma_lados=lado1+lado2;
var suma_lados2=lado1+lado3;
var suma_lados3=lado2+lado3

function altura_triangulo_isoceles(){
    
    if(lado1>0 && lado2>0 && lado3>0)
    { 
        if (lado1==lado2 && suma_lados>lado3 ){
            var altura=Math.sqrt(lado1*lado1 - (lado3*lado3)/4)
            alert(altura);
        }
        
        else if (lado1==lado3 && suma_lados2>lado2){
            var altura=Math.sqrt(lado1*lado1 - (lado2*lado2)/4)
            alert(altura);
        }

        else if (lado2==lado3 && suma_lados3>lado1){
            var altura=Math.sqrt(lado2*lado2 - (lado1*lado1)/4)
            alert(altura);
        }

        else{
            alert("No es un triangulo isoceles");
        }
    }

    else{
        alert("los lados no pueden ser menor a 0");
    }
}

altura_triangulo_isoceles();