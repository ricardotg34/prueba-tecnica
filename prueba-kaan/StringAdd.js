//Ejecutar el programa en node como "node StringAdd '<Cadena a sumar>'"
//Se obtiene la cadena de los argumentos del programa
const argv = process.argv
const cadena = argv[2]

try {
  //Si no se envia una cadena como paramaetro el programa mandara un error
  if (!cadena) {
    throw new Error("ERROR: No se proveyo una cadena a evaluar, ejecutar de nuevo como\"node StringAdd '<Cadena a sumar>'\"")
  }
  //Se mapea cada caracter de la cadena en un array con sus valores ASCII para despues sumarlos con la funcion reduce
  const suma = [...cadena].map((value)=>value.charCodeAt(0)).reduce((acc,current)=>acc+current)
  //Se imprime el valor de la suma de los valores de la cadena
  console.log(suma)
} catch (error) {
  console.log(error.message)
}