// Codigo del cuadrado
console.group ("Cuadrados")
//const ladocuadrado = 5;
//console.log ("los lados del cuadrado miden: " + ladocuadrado + "cm")

function Perimetrocuadrado (lado){
      return lado * 4;
}
 //console.log("El perimetro del cuadrado es: " + Perimetrocuadrado + "cm")

function areaCuadrado(lado){
      return lado * lado;
}
 //console.log("El area de mi cuadrado es: " + Areacuadrado + "cm´2")
 console.groupEnd(); 

// codigo del triangulo 

console.group ("Triangulos")
//const ladotriangulo1 =6;
//const ladotriangulo2 =6;
//const basetriangulo =4;
//const Alturatriangulo =5.5;
 //console.log ("los lados del triangulo miden: " 
 //+ ladotriangulo1 
 //+ "cm, " 
 //+ ladotriangulo2 
 //+ "cm," 
 //+ basetriangulo 
 //+ "cm.");
 function alturaTrianguloIsoceles (trianguloGrandeLadoA,trianguloGrandeLadoB,trianguloGrandeLadoBase){
       if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
             console.error ("los dos lados A y B no son iguales");
       }
       else {
            const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
            const trianguloPequenoLadoBase = trianguloGrandeLadoA;
    
            const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
            const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;
    
            const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);
    
            const trianguloGrandeAltura = trianguloPequenoLadoA;
            return trianguloGrandeAltura;
       }

 function perimetrotriangulo (lado1, lado2,base){
      return lado1 + lado2 + base;
}
 //const Perimetrotriangulo = ladotriangulo1 + ladotriangulo2 + basetriangulo;
 //console.log("El perimetro del triangulo es: " + Perimetrotriangulo + "cm")
 function areaTriangulo(base,altura){
      return lado (base * altura) / 2;
}
//const Areatriangulo = (basetriangulo * Alturatriangulo) / 2;
 //console.log("El area de mi Triangulo es: " + Areatriangulo + "cm´2")
 console.groupEnd();

 //Codigo circulo

 console.group ("Circulos")
//const radiocirculo = 5;
 //console.log ("El radio del circulo es: " + radiocirculo + "cm")
function diametrocirculo(radio) {
      return radio * 2;
}
//const diametrocirculo = radiocirculo * 2;
 //console.log ("El diametro del circulo es: " + diametrocirculo + "cm")

const PI = Math.PI;
function perimetrocirculo (radio) {
      const diametro = diametrocirculo(radio);
      return diametro * PI
} 
//const Perimetrocirculo = diametrocirculo * PI;
 //console.log("El perimetro del circulo es: " + Perimetrocirculo + "cm")
 function areacirculo (radio){
     return (radio * radio ) * PI;
}
//const Areacirculo = ( radiocirculo * radiocirculo) * PI;
 //console.log("El area de mi circulo es: " + Areacirculo + "cm´2")
 console.groupEnd();
 
 //Aqui interactuamos con HTML
 function calcularperimetrocuadrado () {
     const input = document.getElementById ("inputCuadrado");
     const value = input.value;

     const perimetro =Perimetrocuadrado(value)
     alert(perimetro);
}
 function calcularareacuadrado () {
     const input = document.getElementById ("inputCuadrado");
     const value = input.value;

     const area =areaCuadrado(value)
     alert(area);
}}