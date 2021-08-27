//Empecemos

//1 imprimir numeros del 1 al 10

for (let i = 1; i < 11; i++) {
  console.log(i);
}

console.log("--------------------------2-------------------------");
//2: Imprime los números impares menores que 100

let x = 0;

for (let i = 0; i < 50; i++) {
  x += 2;
  console.log(x);
}

console.log(
  "------------------------------------------------3----------------------------------------"
);
//3

let table = 7;
let tresul = 1;
for (let i = 1; i < 11; i++) {
  tresul = table * i;
  console.log(`${table} x ${i} = ${tresul}`);
}

console.log(
  '------------------------------------------------4-----------------------------------"'
);

const tableMultiply = (numtable) => {
  let resultable = 0;
  for (let i = 1; i < 11; i++) {
    resultable = numtable * i;
    console.log(`${numtable} x ${i} = ${resultable}`);
  }
};

tableMultiply(1);
tableMultiply(6);
tableMultiply(8);
tableMultiply(4);
tableMultiply(7);

//Para pensar

// 7: Calcule la suma de números impares mayores que 10 y menores que 30

const sumaDeLosimpares = () => {
  let suma = 0;
  for (let i = 10; i < 31; i++) {
    if (i % 2 !== 0) {
      suma += i;
    }
  }
  return suma;
};

console.log(sumaDeLosimpares());

//8: Cree una función que convierta de Celsius a Fahrenheit

const tranforFaC = (x) => {
  let resultC = (x * 9) / 5 + 32;
  return `${x}°C = ${resultC}°F`;
};

console.log(tranforFaC(23));

//10: Calcule la suma de números en una matriz de números.

let arraySumaNum = [2, 3, 4, 7, 4, 2, 45, 7, 5];

let sumaa = 0;

arraySumaNum.forEach(function (num) {
  sumaa += num;
});
console.log(sumaa);

//10: Calcule la suma de números en una matriz de números.

const matrizNumbers = [2, 4, 6, 7, 8, 5, 32, 3];
let resultado = 0;
matrizNumbers.forEach((index) => {
  resultado += index;
});

console.log(resultado);

//11: Calcule el promedio de los números en una matriz (array) de números.

const matriznum = [2, 6, 7];
let resultadopromedio = 0;
matriznum.forEach((index) => {
  resultadopromedio += index / 3;
});

console.log(resultadopromedio);

//12: Cree una función que reciba una array  de números y devuelva una matriz que contenga solo los números positivos

const arraypositivos = (arr) => {
  let result = 0;
  arr.forEach((index) => {
    if (index > 0) {
      result = index;
      console.log(result);
    }
  });
};

const arraypositives = [-23, 4, 34, 6, 8, -2, -4, -7, -23, 2];

arraypositivos(arraypositives);
