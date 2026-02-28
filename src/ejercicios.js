// ==========================================
// EJERCICIOS DE JAVASCRIPT - NIVEL BÁSICO
// ==========================================
// Instrucciones: Consulta el archivo "instrucciones.md" cuando necesites ayuda.
// Total: 35 tests a aprobar
// ==========================================

// ██████  VARIABLES (Tests 1-6) ████████████████████████

// Test 1:
const nuevaString = "hola nkd sdfkj ";

// Test 2:
const nuevoNum = 24;

// Test 3:
const nuevoBool = false;

// Test 4:
const nuevaResta = 10 - 5 === 5;

// Test 5:
const nuevaMultiplicacion = 10 * 4 === 40;

// Test 6:
const nuevoModulo = 21 % 5 === 1;

// ██████  FUNCIONES (Tests 7-35) ████████████████████████

// Test 7:
function devolverString(str) {
	return str;
}

// Test 8:
function suma(x, y) {
	return x + y;
}

// Test 9:
function resta(x, y) {}

// Test 10:
function divide(x, y) {}

// Test 11:
function multiplica(x, y) {}

// Test 12:
function sonIguales(x, y) {
	return x === y;
}

// Test 13:
function tienenMismaLongitud(str1, str2) {
	return str1.length === str2.length;
}

// Test 14:
function menosQueNoventa(num) {
	return num < 90;
}

// Test 15:
function mayorQueCincuenta(num) {}

// Test 16:
function obtenerResto(x, y) {}

// Test 17:
function esPar(num) {
	return num / 2 === 0;
}

// Test 18:
function esImpar(num) {}

// Test 19:
function elevarAlCuadrado(num) {}

// Test 20:
function elevarAlCubo(num) {}

// Test 21:
function elevar(num, exponent) {}

// Test 22:
function redondearNumero(num) {}

// Test 23:
function redondearHaciaArriba(num) {}

// Test 24:
function numeroRandom() {}

// Test 25:
function esPositivo(numero) {}

// Test 26:
function agregarSimboloExclamacion(str) {}

// Test 27:
function combinarNombres(nombre, apellido) {}

// Test 28:
function obtenerSaludo(nombre) {}

// Test 29:
function obtenerAreaRectangulo(alto, ancho) {}

// Test 30:
function retornarPerimetro(lado) {}

// Test 31:
function areaDelTriangulo(base, altura) {}

// Test 32:
function deEuroAdolar(euro) {}

// Tests 33-35 (3 tests en 1 función):
function esVocal(letra) {
	// Este ejercicio tiene 3 tests internos:
	// Test 33: Verifica si tiene más de una letra
	// Test 34: Verifica si no es vocal
	// Test 35: Verifica si es vocal
}

// ██████  NO MODIFICAR DESDE AQUÍ ███████████

module.exports = {
	nuevaString,
	nuevoNum,
	nuevoBool,
	nuevaResta,
	nuevaMultiplicacion,
	nuevoModulo,
	devolverString,
	tienenMismaLongitud,
	sonIguales,
	menosQueNoventa,
	mayorQueCincuenta,
	suma,
	resta,
	divide,
	multiplica,
	obtenerResto,
	esPar,
	esImpar,
	elevarAlCuadrado,
	elevarAlCubo,
	elevar,
	redondearNumero,
	redondearHaciaArriba,
	numeroRandom,
	esPositivo,
	agregarSimboloExclamacion,
	combinarNombres,
	obtenerSaludo,
	obtenerAreaRectangulo,
	retornarPerimetro,
	areaDelTriangulo,
	deEuroAdolar,
	esVocal,
};
