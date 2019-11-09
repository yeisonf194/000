debugger;
function calculatePow(base,power){
    var result=Math.pow(base,power);
    document.write("<h1>"+base+" elevada a "+power+" es igual a: "+ result+"</h1>");
}
function setValue(){
    var base=parseInt(prompt("Ingrese la base"));
    var power=parseInt(prompt("Ingrese la exponente"));
    while (isNaN(base) || isNaN(power) || base<=0 || power<=0){
        var base=parseInt(prompt("Ingrese la base"));
        var power=parseInt(prompt("Ingrese la exponente"));   
    }
    calculatePow(base,power);
}
setValue();


//**utilizando funciones resolver la siguiente ecuacion: ax^+bx+c */
