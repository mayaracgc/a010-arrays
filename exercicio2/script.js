const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

const array1 = [22 ,88 , 66 , 44]
const array2 = ["livro" , "café" , "chuva"] 
const array3 = [22 , "livro" , 88 > 66]
console.log(array1 , array2, array3) 
// Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log(array1.length , array2.length , array3.length) 
// Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log(array1[0])
console.log(array2[1])
console.log(array3[2])
// Imprima uma informação booleana verdadeira sobre a inclusão de um item do primeiro array, e uma informação booleana falsa sobre a inclusão de um item ao terceiro array.
// Isto é, um includes() verdadeiro, e outro falso.
console.log(array1.includes(88 == 88))
console.log(array2.includes(22 === "livro"))
