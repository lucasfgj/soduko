let A1 = document.getElementById(`A1`);
let A2 = document.getElementById(`A2`);
let A3 = document.getElementById(`A3`);
let A4 = document.getElementById(`A4`);
let A5 = document.getElementById(`A5`);
let A6 = document.getElementById(`A6`);
let A7 = document.getElementById(`A7`);
let A8 = document.getElementById(`A8`);
let A9 = document.getElementById(`A9`);
let B1 = document.getElementById(`B1`);
let B2 = document.getElementById(`B2`);
let B3 = document.getElementById(`B3`);
let B4 = document.getElementById(`B4`);
let B5 = document.getElementById(`B5`);
let B6 = document.getElementById(`B6`);
let B7 = document.getElementById(`B7`);
let B8 = document.getElementById(`B8`);
let B9 = document.getElementById(`B9`);
let C1 = document.getElementById(`C1`);
let C2 = document.getElementById(`C2`);
let C3 = document.getElementById(`C3`);
let C4 = document.getElementById(`C4`);
let C5 = document.getElementById(`C5`);
let C6 = document.getElementById(`C6`);
let C7 = document.getElementById(`C7`);
let C8 = document.getElementById(`C8`);
let C9 = document.getElementById(`C9`);
let D1 = document.getElementById(`D1`);
let D2 = document.getElementById(`D2`);
let D3 = document.getElementById(`D3`);
let D4 = document.getElementById(`D4`);
let D5 = document.getElementById(`D5`);
let D6 = document.getElementById(`D6`);
let D7 = document.getElementById(`D7`);
let D8 = document.getElementById(`D8`);
let D9 = document.getElementById(`D9`);
let E1 = document.getElementById(`E1`);
let E2 = document.getElementById(`E2`);
let E3 = document.getElementById(`E3`);
let E4 = document.getElementById(`E4`);
let E5 = document.getElementById(`E5`);
let E6 = document.getElementById(`E6`);
let E7 = document.getElementById(`E7`);
let E8 = document.getElementById(`E8`);
let E9 = document.getElementById(`E9`);
let F1 = document.getElementById(`F1`);
let F2 = document.getElementById(`F2`);
let F3 = document.getElementById(`F3`);
let F4 = document.getElementById(`F4`);
let F5 = document.getElementById(`F5`);
let F6 = document.getElementById(`F6`);
let F7 = document.getElementById(`F7`);
let F8 = document.getElementById(`F8`);
let F9 = document.getElementById(`F9`);
let G1 = document.getElementById(`G1`);
let G2 = document.getElementById(`G2`);
let G3 = document.getElementById(`G3`);
let G4 = document.getElementById(`G4`);
let G5 = document.getElementById(`G5`);
let G6 = document.getElementById(`G6`);
let G7 = document.getElementById(`G7`);
let G8 = document.getElementById(`G8`);
let G9 = document.getElementById(`G9`);
let H1 = document.getElementById(`H1`);
let H2 = document.getElementById(`H2`);
let H3 = document.getElementById(`H3`);
let H4 = document.getElementById(`H4`);
let H5 = document.getElementById(`H5`);
let H6 = document.getElementById(`H6`);
let H7 = document.getElementById(`H7`);
let H8 = document.getElementById(`H8`);
let H9 = document.getElementById(`H9`);
let I1 = document.getElementById(`I1`);
let I2 = document.getElementById(`I2`);
let I3 = document.getElementById(`I3`);
let I4 = document.getElementById(`I4`);
let I5 = document.getElementById(`I5`);
let I6 = document.getElementById(`I6`);
let I7 = document.getElementById(`I7`);
let I8 = document.getElementById(`I8`);
let I9 = document.getElementById(`I9`);

var linha1 = [A1, A2, A3, B1, B2, B3, C1, C2, C3];
var linha2 = [A4, A5, A6, B4, B5, B6, C4, C5, C6];
var linha3 = [A7, A8, A9, B7, B8, B9, C7, C8, C9];
var linha4 = [D1, D2, D3, E1, E2, E3, F1, F2, F3];
var linha5 = [D4, D5, D6, E4, E5, E6, F4, F5, F6];
var linha6 = [D7, D8, D9, E7, E8, E9, F7, F8, F9];
var linha7 = [G1, G2, G3, H1, H2, H3, I1, I2, I3];
var linha8 = [G4, G5, G6, H4, H5, H6, I4, I5, I6];
var linha9 = [G7, G8, G9, H7, H8, H9, I7, I8, I9];

var coluna1 = [A1, A4, A7, B1, B4, B7, C1, C4, C7];
var coluna2 = [A2, A5, A8, B2, B5, B8, C2, C5, C8];
var coluna3 = [A3, A6, A9, B3, B6, B9, C3, C6, C9];
var coluna4 = [D1, D4, D7, E1, E4, E7, F1, F4, F7];
var coluna5 = [D2, D5, D8, E2, E5, E8, F2, F5, F8];
var coluna6 = [D3, D6, D9, E3, E6, E9, F3, F6, F9];
var coluna7 = [G1, G4, G7, H1, H4, H7, I1, I4, I7];
var coluna8 = [G2, G5, G8, H2, H5, H8, I2, I5, I8];
var coluna9 = [G3, G6, G9, H3, H6, H9, I3, I6, I9];

var quadranteA = [A1, A2, A3, A4, A5, A6, A7, A8, A9];
var quadranteB = [B1, B2, B3, B4, B5, B6, B7, B8, B9];
var quadranteC = [C1, C2, C3, C4, C5, C6, C7, C8, C9];
var quadranteD = [D1, D2, D3, D4, D5, D6, D7, D8, D9];
var quadranteE = [E1, E2, E3, E4, E5, E6, E7, E8, E9];
var quadranteF = [F1, F2, F3, F4, F5, F6, F7, F8, F9];
var quadranteG = [G1, G2, G3, G4, G5, G6, G7, G8, G9];
var quadranteH = [H1, H2, H3, H4, H5, H6, H7, H8, H9];
var quadranteI = [I1, I2, I3, I4, I5, I6, I7, I8, I9]; 

var linhas = [linha1, linha2, linha3, linha4, linha5, linha6, linha7, linha8, linha9];
var colunas = [coluna1, coluna2, coluna3, coluna4, coluna5, coluna6, coluna7, coluna8, coluna9];
var quadrantes = [quadranteA, quadranteB, quadranteC, quadranteD, quadranteE, quadranteF, quadranteG, quadranteH, quadranteI];

function verificarLinhas() {
  for (let linha = 0; linha <= 9; linha++){
      for(let celula = 0; celula <= 9; celula++) {
        var quadrado = linhas[linha][celula]
        console.log(quadrado)
      }
  }

}

function verificarColunas() {
  for (let x = 0; x <= 9; x++){
    quadrado = colunas[x]
    console.log(quadrado)
  }
}

function verificarQuadrante() {
  for (let x = 0; x <= 9; x++){
    quadrado = quadrantes[x]
    console.log(quadrado)
  }
}

function verValorIgual(arrayDeInput, idProcurado) {
  const elementoEncontrado = arrayDeInput.find(input => input.id === idProcurado);

  if (!elementoEncontrado) {
    console.log(`Elemento com o ID ${idProcurado} não encontrado`)
  }
  valorEncontrado = elementoEncontrado.value;

  const valIgualdade = arrayDeInput.every(input => input.value === valorEncontrado)
}


function confirmarNum() {  
  return value
}
































//let quadrante = [linha, coluna];
//let linhas = [A1, A2, A3, B1, B2, B3, C1, C2, C3];

/*
function pegarValor(){
  valQuadA.push(A1.value);
  valQuadA.push(A2.value);
  console.log(valQuadA)
}
*/


//let linhas = [linha1, linha2, linha3]

/*
for (let x = 0; x <= 9; x++){
  var posicao = linhas[x] 
  console.log(posicao) 
}
*/


 /*
  for (let x = 1; x <= 3; x++) {
    let y = "A";
    console.log(y + x);
  
    if (x == 3) {
      for (let x = 1; x <= 3; x++) {
        let y = "B";
        console.log(y + x);
  
        if (x == 3) {
          for (let x = 1; x <= 3; x++) {
            let y = "C";
            console.log(y + x);
          }
        }
      }
    }
  }  */





