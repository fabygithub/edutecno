var identificadores=["1,2,3"]
var claves=["a,b,c"]
var clientes = 1;


var insctrucciones = alert("ingresar estos 3 usuarios\nusuario=1\nclave=a\nusuario=2\nclave=b\nusuario=3\nclave=c")

var identificador= prompt("esta pagina dice.\nr giro\n ingresa el identificador (1 o 2 o 3)")
var clave = prompt("esta pagina dice.\n.-ingresa la contraseña (a o b o c)")

while(clientes < 3){
if(identificador === '1' && clave === 'a' || identificador === '2' && clave === 'b' || identificador === '3' && clave === 'c' ){
   clientes = clientes + 1;
}
var identificador= prompt("esta pagina dice.\nr giro\n ingresa el identificador (1 o 2 o 3)")
var clave = prompt("esta pagina dice.\n.-ingresa la contraseña (a o b o c)")
}



var opcion = alert("esta pagina dice.\nBienvenido a banca en linea")
var opcion = alert("esta pagina dice.\nBienvenido Patricia flores")



var opcion = prompt("esta pagina dice.\nSeleccione que desea hacer\n1.-ver saldo \n2.-realizar giro\n3.-realizar deposito\n4.-salir")

var saldo = 500

while(opcion != '4'){

switch(opcion){
 
//1
case '1':
var opcion = alert("esta pagina dice.\nsu saldo es"+" "+saldo)
break;

//2
case '2':
var giro = prompt("esta pagina dice.\nsu saldo actual es:" +saldo +"\ningrese el monto que desea girar")
if(giro <= saldo){
 saldo = saldo - giro
 var opcion = alert("esta pagina dice.\nsu giro a sido realizado su nuevo saldo es "+saldo)
}
else{
 var opcion = alert("esta pagina dice.\nel giro es mayor al saldo")   
}

break;

//3
case '3':
var deposito = parseInt(prompt("esta pagina dice.\nsu saldo actual es:"+saldo+"\ningrese el monto que desea depositar"))
saldo = saldo + deposito
var opcion = alert("esta pagina dice.\ndeposito realizado su saldo es"+" "+saldo)
break;
 
//4
//salir
case '4':
break;

}

var opcion = prompt("esta pagina dice.\nSeleccione que desea hacer\n1.-ver saldo \n2.-realizar giro\n3.-realizar deposito\n4.-salir")


}