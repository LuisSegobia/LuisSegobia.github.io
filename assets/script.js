var numero = (prompt("ingresa un numero \n y te dire si es par o impar"))
var resultado =parImpar(numero)

alert("el numero "+numero+" es "+resultado)
function parImpar(numero){

    if (numero % 2 ==0){
        return "par";}

    else {
    return "impar";} 
}



var cadena = (prompt("introduzca un texto, \n veremos si tiene mayusculas, \n minusculas o ambas"))
var resultado =info(cadena)
alert (resultado)


function info(cadena){
    if(cadena == cadena.toUpperCase()){

        return("cadena de texto mayuscula");

    }
    else if (cadena==cadena.toLowerCase()){
        return("cadena de texto minusculas");
    }
    else {
        return"cadena de texto combinada";
    }

    

}