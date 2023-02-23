
/*Escribir un algoritmo que permita leer la cantidad de horas trabajadas por un
empleado y el precio de la hora de trabajo, tambien que calcule y muestre el 
salario que le corresponda cobrar a ese empleado, recordar que:
Salario = cantidad de horas * precio hora trabajada*/

//1 Leer datos
//2 calcular el salario
//3 mostrar datos

//1.1 leer horas de trabajo
//1.1 leer valor hora de trabajo


//2.1 salario total es cantidad de horas por valor hora

//3.1 mostrar salario total

var cantidadHora = 0;
var valorHora = 0;
var salarioTotal = 0;

        cantidadHora = parseInt(prompt("Ingrese la cantidad de horas trabajadas"));
        valorHora = parseInt(prompt("Ingrese el valor de hora de trabajo "));
        salarioTotal = cantidadHora * valorHora;
        
        console.log("El salario total es " +salarioTotal +"$");
        

