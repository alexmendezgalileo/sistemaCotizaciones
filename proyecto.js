//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%

//extras
var propiedad_recargo = 0.35 //35%
var salario_recargo = .05 //5%


//Recargo
var recargo = 0
var recargo_total = 0

//Precio final 
var precio_final = 0

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
var edad_numero = parseInt(edad)

//validadmos que sea mayor de edada seguir para seguir con el proceso
if (edad_numero >= 18){
var iniciar = prompt("Desea Ingresar una Cotizacion","SI/NO")
while("SI" == iniciar.toUpperCase()){
  
 
    var casado = prompt("¿Está casado actualmente?", 'SI/NO')

  //Comprobamos la edad del cónyuge, solamente si se está casado/a
  var edad_conyuge
  if("SI" == casado.toUpperCase()){
    edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
  }
  //convirtiendo las edades ingresadas a números s
  var edad_numero = parseInt(edad)
  var edad_conyuge_numero = 0

  //convirtiendo la edad del cónyuge si se esta casado/a
  if("SI" == casado.toUpperCase()){
    edad_conyuge_numero = parseInt(edad_conyuge)
  }

  var hijos = prompt("¿Tiene hijos o hijas?", 'SI/NO')
  //console.log(hijos)
  //Comprobamos la cantidad de hijos solamente si los tienen
  var cantidad_hijos
  if("SI" == hijos.toUpperCase()){
    cantidad_hijos = prompt("Cuantos hijos tiene?")
    }
  //console.log(cantidad_hijos)
  /**
   * 1. convierta la cantidad de hijos a numero
   */
  var numero_hijos
    if("SI" == hijos.toUpperCase()){
      numero_hijos = parseInt(cantidad_hijos)
    }
  
  /*EVALUA SALARIO*/
    var trabajo = prompt("Tiene un Trabajo?","SI/NO")
    var salario = 0
    if("SI" == trabajo.toUpperCase()){
      salario = parseInt(prompt("Cual es el monto de su salario?"))      
    }
  
  /*EVALUA PROPIEDAD*/
  var propiedad = prompt("Tiene propiedades?","SI/NO")
  var cotizacion_pro = 0
  if("SI" == propiedad.toUpperCase()){
    cotizacion_pro = parseInt(prompt("Cual es el costo de sus propiedades?"))      
  }
  //Aquí debe calcular el recargo total basado en las respuestas ingresadas

  //Aquí es donde debe de calcular los recargos y el valor final
  //Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
  if(edad_numero>=18 && edad_numero<25){
    //Calculamos el recargo en base a la edad 
    recargo = precio_base * edad_18
    //Sumamos todos los recargos que hemos obtenido
    recargo_total = recargo_total + recargo
  //aqui puede colocar un else if() con el siguiente rango
  }else if(edad_numero>=25 && edad_numero<50){
    recargo = precio_base * edad_25
    recargo_total = recargo_total + recargo
  }else if(edad_numero>=50){
    recargo = precio_base * edad_50
    recargo_total = recargo_total + recargo
  }
  //console.log(recargo_total)
  /** 
   * 2. Recargo por la edad del conyuge
   */
  if("SI" == casado.toUpperCase()){
    if(edad_conyuge_numero >= 18 && edad_conyuge_numero<25){
      recargo = precio_base * edad_18
      recargo_total = recargo_total + recargo
    }else if(edad_conyuge_numero >= 25 && edad_conyuge_numero<50){    
      recargo = precio_base * edad_25
      recargo_total = recargo_total + recargo
    }else if(edad_conyuge_numero >= 50){    
    recargo = precio_base * edad_50
    recargo_total = recargo_total + recargo
    }
  }
  //console.log(recargo_total)
  /**
   * 3. Recargo por la cantidad de hijos 
   */ 
  if("SI" == hijos.toUpperCase()){
    recargo = precio_base * (hijos_recargo * cantidad_hijos)
    recargo_total = recargo_total + recargo
  }
  //console.log(recargo_total)
  /**
   * Extras. Recargo por la cantidad de Salario 
   */
  if ("SI"== trabajo.toUpperCase()) {
    recargo = salario_recargo*salario
    recargo_total = recargo_total + recargo
  }
   /**
   * Extras. Recargo por la cantidad de propiedades 
   */
  //console.log(recargo_total)
  if ("SI"== propiedad.toUpperCase()) {
    recargo = propiedad_recargo*cotizacion_pro
    recargo_total = recargo_total + recargo
  }
  //console.log(recargo_total)


  precio_final = precio_base + recargo_total
  iniciar = prompt("Desea Ingresar otra cotizacion? o desea Salir?","SI/SALIR")
} 
  //var salir = prompt("Ingrese la palabra SALIR para presentar la cotizacion")
    //Resultado
  if("SALIR" == iniciar.toUpperCase()){
    alert ("Para el asegurado "+nombre)
    alert ("El recargo total sera de: "+recargo_total)
    alert ("El precio sera de: "+precio_final)
  }
}else{
  alert("No se puede ofrecer un seguro porque es menor de edad")
}