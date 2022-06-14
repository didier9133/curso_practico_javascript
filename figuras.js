// Codigo del Cuadrado

console.group("cuadrados");

const lado_Cuadrado= 5;
console.log("los lados del Cuadrado miden: " + lado_Cuadrado +" cm" );

const perimetro_Cuadrado= lado_Cuadrado*4;
console.log("el perimetro del Cuadrado es: " + perimetro_Cuadrado+ " cm" );


const Area_Cuadrado= lado_Cuadrado*lado_Cuadrado;
console.log("El area del Cuadrado es: " + Area_Cuadrado+" cm^2" );


console.groupEnd();

// Codigo del Triangulo

console.group("triangulo")

const lado_Triangulo1= 6;
const lado_Triangulo2= 6;
const base_Triangulo= 4;


console.log(
    "los lados del Triangulo miden: " 
    + lado_Triangulo1 
    +" cm, "
    + lado_Triangulo2 
    +" cm, "
    + base_Triangulo 
    +" cm"  
);

const altura_triangulo= 5.5;

console.log("la altura del triangulo es de: " + altura_triangulo)

const perimetro_Triangulo= lado_Triangulo1+lado_Triangulo2+base_Triangulo;
console.log("el perimetro del Triangulo es: " + perimetro_Triangulo+ " cm" );


const Area_Triangulo= (base_Triangulo*altura_triangulo)/2;
console.log("El area del Triangulo es: " + Area_Triangulo+" cm^2" );

console.groupEnd();

// Codigo del crirculo

console.group("Circulos");

const radio_Circulos= 4;
console.log("el radio del Circulos es: " + radio_Circulos +" cm" );

const diametro_Circulos= radio_Circulos*2;
console.log("el diametro del Circulos es: " + diametro_Circulos+ " cm" );

const pi=Math.PI; 
console.log("El valor de pi es: " + pi);

const perimetro_Circulos=diametro_Circulos*pi;
console.log("el perimetro del Circulos es: " + perimetro_Circulos+ " cm" );

const area_Circulos=(radio_Circulos * radio_Circulos)*pi;
console.log("el area del Circulos es: " + area_Circulos+ " cm" );



console.groupEnd();

// Codigo del Circulos