// Codigo del Cuadrado

console.group("cuadrados");

//const lado_Cuadrado= 5;
//console.log("los lados del Cuadrado miden: " + lado_Cuadrado +" cm" );

function perimetro_Cuadrado(lado){
  return lado*4;  
} 
//console.log("el perimetro del Cuadrado es: " + perimetro_Cuadrado+ " cm" );


function Area_Cuadrado(lado){
   return lado*lado;   
} 
//console.log("El area del Cuadrado es: " + Area_Cuadrado+" cm^2" );


console.groupEnd();

// Codigo del Triangulo

console.group("triangulo")

//const lado_Triangulo1= 6;
//const lado_Triangulo2= 6;
//const base_Triangulo= 4;


//console.log(
//    "los lados del Triangulo miden: " 
//    + lado_Triangulo1 
//    +" cm, "
//    + lado_Triangulo2 
//    +" cm, "
//  + base_Triangulo 
//  +" cm"  
//);

//const altura_triangulo= 5.5;

//console.log("la altura del triangulo es de: " + altura_triangulo)

function perimetro_Triangulo(lado1,lado2,base){
    return (lado1+lado2+ base);
} 
//console.log("el perimetro del Triangulo es: " + perimetro_Triangulo+ " cm" );


function Area_Triangulo(base,altura){
    return (base*altura)/2;  
} 
//console.log("El area del Triangulo es: " + Area_Triangulo+" cm^2" );

console.groupEnd();

// Codigo del crirculo

console.group("Circulos");

//const radio_Circulos= 4;
//console.log("el radio del Circulos es: " + radio_Circulos +" cm" );

function diametro_Circulos(radio){
    return radio*2;  
}
//console.log("el diametro del Circulos es: " + diametro_Circulos+ " cm" );

const pi=Math.PI; 
//console.log("El valor de pi es: " + pi);

function perimetro_Circulos(radio){
    const diametro = diametro_Circulos(radio)
    return diametro*pi;
} 

//console.log("el perimetro del Circulos es: " + perimetro_Circulos+ " cm" );

function area_Circulos(radio){
    return (radio * radio)*pi;
}

//console.log("el area del Circulos es: " + area_Circulos+ " cm" );

console.groupEnd();




function calcular_perimetro_cuadrado(){
    const input=document.getElementById("input_cuadrado");
    const value=parseInt(input.value);

    const perimetro= perimetro_Cuadrado(value);
    alert(perimetro);
}

function calcular_area_cuadrado(){
    const input=document.getElementById("input_cuadrado");
    const value=parseInt(input.value);
    
    const area= Area_Cuadrado(value);
    alert(area);
}

function calcular_perimetro_triangulo(){
    const input1=document.getElementById("input_triangulo1");
    const value1=parseInt(input1.value);

    const input2=document.getElementById("input_triangulo2");
    const value2=parseInt(input2.value);
    
    
    const input3=document.getElementById("input_triangulo_base");
    const value_base=parseInt(input3.value);
    
    const perimetro= perimetro_Triangulo(value1,value2,value_base);
    alert(perimetro);
}

function calcular_area_triangulo(){
    const input3=document.getElementById("input_triangulo_base");
    const value_base=parseInt(input3.value);

    const input4=document.getElementById("input_triangulo_altura");
    const value_altura=parseInt(input4.value);

    const area= Area_Triangulo(value_base,value_altura);
    alert(area);
}


function calcular_perimetro_circulo(){
    const input=document.getElementById("input_circulo");
    const value=parseInt(input.value);
    const pi=Math.PI; 

    const perimetro= perimetro_Circulos(value);
    alert(perimetro);
}

function calcular_area_circulo(){
    const input=document.getElementById("input_circulo");
    const value=parseInt(input.value);
    const pi=Math.PI; 
    
    const area= area_Circulos(value);
    alert(area);
}
