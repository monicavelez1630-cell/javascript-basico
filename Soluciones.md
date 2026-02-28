---

## 🎁 Bonus: Archivo de Soluciones (Solo para Docente)

Crea `SOLUCIONES-SERIE2.md` con esto:

<details>
<summary>👉 Click para ver soluciones</summary>

```javascript
// esMayorDeEdad
function esMayorDeEdad(edad) {
	return edad >= 18;
}

// clasificarTriangulo
function clasificarTriangulo(lado1, lado2, lado3) {
	// Verificar propiedad triangular
	if (lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
		return "No es triángulo";
	}
	// Clasificar
	if (lado1 === lado2 && lado2 === lado3) return "Equilátero";
	if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) return "Isósceles";
	return "Escaleno";
}

// calcularDescuento
function calcularDescuento(precio, esMiembro, esFinDeSemana) {
	if (esMiembro && esFinDeSemana) {
		return precio * 0.7; // 30% descuento
	} else if (esMiembro || esFinDeSemana) {
		return precio * 0.85; // 15% descuento
	}
	return precio; // sin descuento
}

// obtenerDiaSemana
function obtenerDiaSemana(numero) {
	switch (numero) {
		case 1:
			return "Lunes";
		case 2:
			return "Martes";
		case 3:
			return "Miércoles";
		case 4:
			return "Jueves";
		case 5:
			return "Viernes";
		case 6:
			return "Sábado";
		case 7:
			return "Domingo";
		default:
			return "Día inválido";
	}
}

// esAnioBisiesto
function esAnioBisiesto(anio) {
	if (anio % 400 === 0) return true;
	if (anio % 100 === 0) return false;
	return anio % 4 === 0;
}

// validarContraseña
function validarContraseña(password) {
	if (password.length < 8) return false;
	if (!/[A-Z]/.test(password)) return false;
	if (!/[0-9]/.test(password)) return false;
	return true;
}

// calcularIMC
function calcularIMC(peso, altura) {
	const imc = peso / (altura * altura);
	if (imc < 18.5) return "Bajo peso";
	if (imc < 25) return "Peso normal";
	if (imc < 30) return "Sobrepeso";
	return "Obesidad";
}

// esMultiplo
function esMultiplo(num1, num2) {
	return num1 % num2 === 0 || num2 % num1 === 0;
}

// obtenerEstacion
function obtenerEstacion(mes) {
	switch (mes) {
		case 12:
		case 1:
		case 2:
			return "Invierno";
		case 3:
		case 4:
		case 5:
			return "Primavera";
		case 6:
		case 7:
		case 8:
			return "Verano";
		case 9:
		case 10:
		case 11:
			return "Otoño";
		default:
			return "Mes inválido";
	}
}

// calcularPropina
function calcularPropina(total, porcentaje) {
	return Number(((total * porcentaje) / 100).toFixed(2));
}

// esPalabraPalindroma
function esPalabraPalindroma(palabra) {
	const limpia = palabra.toLowerCase();
	const invertida = limpia.split("").reverse().join("");
	return limpia === invertida;
}

// contarVocales
function contarVocales(texto) {
	const vocales = "aeiou";
	let contador = 0;
	for (let char of texto.toLowerCase()) {
		if (vocales.includes(char)) contador++;
	}
	return contador;
}

// formatearNombre
function formatearNombre(nombre, apellido, mayusculas) {
	if (mayusculas) {
		return `${nombre.toUpperCase()} ${apellido.toUpperCase()}`;
	}
	const capitalizar = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
	return `${capitalizar(nombre)} ${capitalizar(apellido)}`;
}

// sumarHasta
function sumarHasta(limite) {
	let suma = 0;
	for (let i = 1; i <= limite; i++) {
		suma += i;
	}
	return suma;
}

// obtenerParesHasta
function obtenerParesHasta(limite) {
	const pares = [];
	for (let i = 0; i <= limite; i += 2) {
		pares.push(i);
	}
	return pares;
}

// factorial
function factorial(n) {
	if (n === 0 || n === 1) return 1;
	let resultado = 1;
	for (let i = 2; i <= n; i++) {
		resultado *= i;
	}
	return resultado;
}

// buscarNumero
function buscarNumero(array, objetivo) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === objetivo) return true;
	}
	return false;
}

// obtenerPrimerosN
function obtenerPrimerosN(array, n) {
	if (n <= 0) return [];
	const resultado = [];
	for (let i = 0; i < n && i < array.length; i++) {
		resultado.push(array[i]);
	}
	return resultado;
}
```
