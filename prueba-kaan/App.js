var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
//Ejecutar el programa en node como "node StringAdd '<Cadena a sumar>'"
//Se obtiene la cadena de los argumentos del programa
var argv = process.argv;
var cadena = argv[2];
try {
    //Si no se envia una cadena como paramaetro el programa mandara un error
    if (!cadena) {
        throw new Error("ERROR: No se proveyo una cadena a evaluar, ejecutar de nuevo como\"node StringAdd '<Cadena a sumar>'\"");
    }
    //Se mapea cada caracter de la cadena en un array con sus valores ASCII para despues sumarlos con la funcion reduce
    var suma = __spreadArrays(cadena).map(function (value) { return value.charCodeAt(0); }).reduce(function (acc, current) { return acc + current; });
    //Se imprime el valor de la suma de los valores de la cadena
    console.log(suma);
}
catch (error) {
    console.log(error.message);
}
