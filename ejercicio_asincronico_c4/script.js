//_________________________________________Ejercicio 1___________________________________________________________

function contarDeA_n(contar_de_a, contar_hasta) {
    let i = 1;
    while (i <= contar_hasta) {
        console.log(i);
        i = i + contar_de_a;
    }
}
//   function contar_de_hasta_for(intervalo, hasta) {
//     for (let i = 0; i <= hasta; i = i + intervalo) {
//       console.log('Numero ' + i);
//     }
//   }

//____________________________________________Ejercicio 2_________________________________________________________
// 1° ingresar las palabras que deseo que se muestren -- además mostrará una coma entre el string y el número
function fizz_buzz(palabra1, palabra2) {
    let numero = 1;
    while (numero <= 100) {

        if (((numero % 3) == 0) && ((numero % 5) == 0)) { 
            console.log(palabra1 + palabra2);
        }
        else if ((numero % 3) == 0) { 
            console.log(palabra1 + ' , ' + numero);
        }
        else if ((numero % 5) == 0) {
            console.log(palabra2 + ' , ' + numero);
        }
        else {
            console.log('Num: ' + numero);
        }
        numero++;
    }
}
//2° usuario indicará hasta que número se debe contar
function fizz_buzz2(palabra1, palabra2) {
    let hasta_que_num = prompt('¿Hasta que número quieres contar?');
    let numero = 1;

    while (numero <= hasta_que_num) {

        if (((numero % 3) == 0) && ((numero % 5) == 0)) {
            console.log(palabra1 + palabra2);
        }
        else if ((numero % 3) == 0) { 
            console.log(palabra1 + ' , ' + numero);
        }
        else if ((numero % 5) == 0) {
            console.log(palabra2 + ' , ' + numero);
        }
        else {
            console.log('Num: ' + numero);
        }
        numero++;
    }
}

//3°  el usuario puede indicar los numeros que serán múltiplos 
function fizz_buzz3(palabra1,palabra2) {
    let fizzNum = prompt('¿Ingrese el número para el primer múltiplo?');
    let buzzNum = prompt('¿Ingrese el número para el segundo múltiplo?');
    let hasta_que_num = prompt('¿Hasta que número quieres contar?');

    let numero = 1;

    while (numero <= hasta_que_num) {

        if (((numero % fizzNum) == 0) && ((numero % buzzNum) == 0)) {
            console.log(palabra1 + palabra2);
        }
        else if ((numero % fizzNum) == 0) { 
            console.log(palabra1 + ' , ' + numero);
        }
        else if ((numero % buzzNum) == 0) {
            console.log(palabra2 + ' , ' + numero);
        }
        else {
            console.log('Num: ' + numero);
        }
        numero++;
    }
}

