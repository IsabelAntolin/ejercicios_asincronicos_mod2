const numero = parseInt(prompt('Ingrese un numero'));


if (numero % 2 == 0) {
    alert('numero par');
}
else {
    alert('numero impar');
}

/************************************************************ */
const sexualidad = prompt('Cual es su sexualidad, M para mujer o H para Hombre')

if (sexualidad != 'h' && sexualidad != 'H' && sexualidad != 'M' && sexualidad != 'm') {
    alert('ingrese la opcion correcta ');
}
else {
    const edad = parseInt(prompt('Ingrese su edad'));

    if (sexualidad == 'm' || sexualidad == 'M') {
        if (edad >= 60) {
            alert('Jubilada');
        }
        else {
            alert('No está Jubila');
        }
    }
    else if (sexualidad == 'h' || sexualidad == 'H') {
        if (edad >= 65) {
            alert('Jubilado');
        }
        else {
            alert('No está Jubilado');
        }
    }
}

// if((sexualidad==='m' && edad>=60) ||(sexualidad==='M' && edad >= 60) || (sexualidad==='H' && edad>=65) ||(sexualidad==='h' && edad >= 65)){
//     alert('Jubilado')
// }
// else{
//     alert('No está Jubilado')
// }








