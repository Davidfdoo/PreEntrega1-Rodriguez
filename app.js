

const user = "admin" ;
const pass = "pass1234";
let notaNecesaria ;

function necesitoNota (nota1, nota2,valorNota1,valorNota2,valorNota3){
    notaNecesaria = (((3)-((nota1*(valorNota1/100))+(nota2*(valorNota2/100))))/(valorNota3/100));
}

alert("BIENVENIDO AL SIMULADOR DE NOTAS \n Para ingresar digite acontinuacion sus datos de ingreso")

let intentos = 2 ;
while(intentos >=0){

    let u = prompt("Ingrese su usuario");
    let p = prompt("Ingrese su contraseña");

    if (!u || !p ){
        alert("ingresa los datos solicitados");
    } else {
        if (u == user && p == pass) {
            alert("Bienvenido Admin");

            alert("El sistema calcula la nota que necesitas para aprobar la materia")

            alert("nota minima para aprobar es 3")

            let nota1=prompt("Ingrese su primera nota")
            let valorNota1=prompt("Ingrese el valor en porcentaje primera nota \n ejemplo =30 sin el simbolo")

            let nota2=prompt("Ingrese su segunda nota")
            let valorNota2=prompt("Ingrese el valor en porcentaje de segunda nota \n ejemplo =30 sin el simbolo")

            let valorNota3=prompt("Ingrese el valor en porcentaje ultima nota \n ejemplo =40 sin el simbolo")

            necesitoNota(notaMin, nota1, nota2,valorNota1,valorNota2,valorNota3)
            alert("La nota minima para aprobar es " + notaNecesaria)

            if(notaNecesaria < 3 ){
                alert("ya casi lo logras amigo no necesitas mucha nota")
            }else if(notaNecesaria >3 && notaNecesaria <5){
                alert("Esfuerzate un poco pero aun puedes pasar")
            }
            else if(notaNecesaria>5){
                alert("Que mal amigo tendras que recursar")
            }                 
            break;
        }
        alert ("Usuario y/o pass incorrecto. Te quedan "+intentos+ " intentos") ;
    }
        intentos -- ;
}
if (intentos <= 0 ){
    alert("Usuario Bloqueado");
}
    
