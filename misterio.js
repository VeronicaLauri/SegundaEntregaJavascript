const sospechosos = ['Homero', 'Marge', 'Bart', 'Lisa', 'Krusty el Payaso', 'Smithers'];
const armas = ['Dona Envenenada', 'Barra de Plutonio', 'Saxofón', 'Collar de Perlas', 'Gomera'];
const lugares = ['Calabozo del Androide', 'Planta Nuclear', 'Mansión Burns', 'Estudios Krustylu', 'Casa de Los Simpsons'];

let intentos;
let solucion;

function reiniciarJuego() {
    // Reiniciar intentos
    intentos = 5;

    // Reiniciar selección aleatoria de la solución
    solucion = {
        sospechoso: sospechosos[Math.floor(Math.random() * sospechosos.length)],
        arma: armas[Math.floor(Math.random() * armas.length)],
        lugar: lugares[Math.floor(Math.random() * lugares.length)],
    };

    // Reiniciar opciones en los selects
    document.getElementById('suspect').selectedIndex = 0;
    document.getElementById('location').selectedIndex = 0;
    document.getElementById('weapon').selectedIndex = 0;
}

function obtenerSeleccion(id) {
    const elemento = document.getElementById(id);
    return elemento.options[elemento.selectedIndex].value;
}

function obtenerPistaSospechoso() {
    const pistaSospechoso = {
        'Homero': 'Tiene una adicción al alcohol',
        'Marge': 'Su cabellera es azulada',
        'Bart': 'Siempre está causando problemas',
        'Lisa': 'Su IQ es muy alto',
        'Krusty el Payaso': 'Tiene una profesión muy particular',
        'Smithers': 'Tiene miopía',
    };
    return `Testigos han brindado nueva información sobre el sospechoso: ${pistaSospechoso[solucion.sospechoso]}`;
}

function obtenerPistaArma() {
    const pistaArma = {
        'Dona Envenenada': 'restos de glaseado de azúcar en el cuerpo del Sr. Burns',
        'Barra de Plutonio': 'elevados niveles de radiación en el cuerpo del Sr. Burns',
        'Saxofón': 'restos de Cobre y Zinc en el cuerpo del Sr. Burns',
        'Collar de Perlas': 'restos de joyas cerca del cuerpo del Sr. Burns',
        'Gomera': 'restos de una tira elástica cerca del cuerpo del Sr. Burns',
    };
    return `La policía analizó nueva evidencia sobre el arma homicida y se descubrieron ${pistaArma[solucion.arma]}`;
}

function obtenerPistaLugar() {
    const pistaLugar = {
        'Calabozo del Androide': 'huellas camino al local de venta de comics',
        'Planta Nuclear': 'huellas que tenían altos niveles de radiación',
        'Mansión Burns': 'huellas camino a donde se encuentran las mansiones de los millonarios de Springfield',
        'Estudios Krustylu': 'huellas con restos de maquillaje blanco y rojo',
        'Casa de Los Simpsons': 'huellas camino a 742 Evergreen Terrace',
    };
    return `Se identificó la posible escena del crimen gracias a que se descubrieron ${pistaLugar[solucion.lugar]}`;
}

function verificarAdivinanza() {
    const sospechoso = obtenerSeleccion('suspect');
    const ubicacion = obtenerSeleccion('location');
    const armaElegida = obtenerSeleccion('weapon');

    if (sospechoso === solucion.sospechoso && ubicacion === solucion.lugar && armaElegida === solucion.arma) {
        alert('¡Felicidades! Has resuelto el misterio. ¡Eres un verdadero detective!');
        reiniciarJuego();
    } else {
        alert('Respuesta incorrecta. Sigue investigando...');
        intentos--;

        if (intentos > 0) {
            alert(`Te quedan ${intentos} intentos.`);
            // Proporcionar pistas condicionadas en el intento 2, 3 y 4
            if (intentos === 4) {
                alert(obtenerPistaSospechoso());
            } else if (intentos === 3) {
                alert(obtenerPistaArma());
            } else if (intentos === 2) {
                alert(obtenerPistaLugar());
            }
        } else {
            alert('Te has quedado sin intentos. El misterio sigue sin resolver.');
            reiniciarJuego();
        }
    }
}

// Iniciar el juego por primera vez
reiniciarJuego();
