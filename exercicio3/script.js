const array1 = [22 ,88 , 66 , 44]
const array2 = ["livro" , "café" , "chuva"] 
const array3 = [22 , "livro" , 88 > 66] 
// Adicione um item number ao primeiro array. Utilize console.log() para exibir o original e a cópia;
const array1Copia = array1.slice()
array1.push(77)
console.log(array1)
console.log(array1Copia)
// Remova o último item do segundo array. Utilize console.log() para exibir o original e a cópia;
const array2Copia= array2.slice()
array2.pop()
console.log(array2)
console.log(array2Copia)
// Remova o segundo item do terceiro array. Utilize console.log() para exibir o original e a cópia;
const array3Copia = array3.slice()
array3.splice(2,1)
console.log(array3)
console.log(array3Copia)
