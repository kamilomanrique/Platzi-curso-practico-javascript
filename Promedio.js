

/* let sumaLista1 = 0;
for (let i = 0; i< lista1.length; i++) {
 sumaLista1 = sumaLista1 + lista1[i];
} 

const promedioLista1 = sumaLista1 / lista1.length; */

function calcularMediaAritmetica (lista) {
      /* let sumaLista = 0;
      for (let i = 0; i< lista.length; i++) {
       sumaLista = sumaLista + lista[i];
      }  */
      const sumaLista = lista.reduce(
            function (valorAcumulado = 0, nuevoElemento) {
              return valorAcumulado + nuevoElemento;
            }
      );  
      
      const promedioLista = sumaLista / lista.length;

      return promedioLista
}
const lista2 = [
      100,200,300,500
];

const mitadLista2 = parseInt (lista2.length / 2);
 function esPar (numerito) {
      if (numerito % 2 === 0) {
             return true;
      } 
       else {
             return false;
       }
      }
  let mediana;    
  if (esPar(lista2.length)) {
      const elemento1= lista2 [mitadLista2 -1];
      const elemento2 = lista2 [mitadLista2];

      const promedioElemto1y2 = calcularMediaAritmetica ([
            elemento1,
            elemento2,
      ]);
      mediana = promedioElemto1y2
} else {
    mediana = lista2[mitadLista2];
  }
 
/*   const ordenarnumeros = [100,330,900,770,550,80,5,]
  ordenarnumeros.sort();
  console.log(ordenarnumeros) */

 const listanumeros = [1,1,1,2,1,5,1,48,1,9,3,5,8,8,8,96,6,63];
 
 const lista1count ={};
  listanumeros.map(
        function (elemento){
              if (lista1count[elemento]){
                lista1count[elemento] += 1;  
              } else {
                  lista1count[elemento] = 1;     
              }
        }
  );
  const lista1Array = Object.entries (lista1count).sort(
        function(elementoA , elementoB) {
            return  elementoA[1] - elementoB[1]
        }
  );
  const moda = lista1Array[lista1Array.length-1]
