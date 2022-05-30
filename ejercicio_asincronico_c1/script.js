const edad = parseInt(prompt('Ingrese su edad'));
const cant_dias= (edad * 365)


//_________________________________________________________________________________________
const edad_maxima = 83
const snack = prompt('¿Cuál es tu snack preferido?');
const snack_dias = parseInt(prompt('¿Cuántos te comes al día?'));
const dias_restantes= (edad_maxima-edad)*365
const precio = parseInt(prompt('¿Cuál es su precio?'));
const cantidad_snack = (dias_restantes*snack_dias);


alert('Tus '+edad+' años equivalen a '+cant_dias+ ' dias\n'+'Y necesitarás tener $ '+(cantidad_snack*precio)+' pesos \nPara poder comerte '+cantidad_snack+' '+snack+ ' por lo que te queda de vida');

