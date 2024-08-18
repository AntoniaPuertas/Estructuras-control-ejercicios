// Soluciones: Ejercicios de Condicionales en JavaScript

// 1. if simple
console.log("Ejercicio 1: if simple");

function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return true;
  }
  return false;
}

console.log(esMayorDeEdad(20)); // Muestra: true
console.log(esMayorDeEdad(16)); // Muestra: false

// 2. if-else
console.log("\nEjercicio 2: if-else");

function calificarNota(puntuacion) {
  if (puntuacion >= 60) {
    return 'Aprobado';
  } else {
    return 'Suspenso';
  }
}

console.log(calificarNota(75)); // Muestra: 'Aprobado'
console.log(calificarNota(45)); // Muestra: 'Suspenso'

// 3. if-else if
console.log("\nEjercicio 3: if-else if");

function obtenerEstacionDelAnio(mes) {
  if (mes >= 3 && mes <= 5) {
    return 'Primavera';
  } else if (mes >= 6 && mes <= 8) {
    return 'Verano';
  } else if (mes >= 9 && mes <= 11) {
    return 'Otoño';
  } else if (mes === 12 || mes === 1 || mes === 2) {
    return 'Invierno';
  } else {
    return 'Mes inválido';
  }
}

console.log(obtenerEstacionDelAnio(2));  // Muestra: 'Invierno'
console.log(obtenerEstacionDelAnio(6));  // Muestra: 'Verano'
console.log(obtenerEstacionDelAnio(10)); // Muestra: 'Otoño'

// 4. switch
console.log("\nEjercicio 4: switch");

function obtenerDiaLaboral(dia) {
  switch (dia) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return 'Día laboral';
    case 6:
    case 7:
      return 'Fin de semana';
    default:
      return 'Número de día inválido';
  }
}

console.log(obtenerDiaLaboral(3)); // Muestra: 'Día laboral'
console.log(obtenerDiaLaboral(6)); // Muestra: 'Fin de semana'
console.log(obtenerDiaLaboral(8)); // Muestra: 'Número de día inválido'

// 5. Condicional ternario
console.log("\nEjercicio 5: Condicional ternario");

function esPar(numero) {
  return numero % 2 === 0 ? 'Par' : 'Impar';
}

console.log(esPar(4)); // Muestra: 'Par'
console.log(esPar(7)); // Muestra: 'Impar'

// 6. Combinación de condicionales
console.log("\nEjercicio 6: Combinación de condicionales");

function puedeConducir(edad, tieneCarnet) {
  return edad >= 18 && tieneCarnet;
}

console.log(puedeConducir(20, true));  // Muestra: true
console.log(puedeConducir(17, true));  // Muestra: false
console.log(puedeConducir(20, false)); // Muestra: false

