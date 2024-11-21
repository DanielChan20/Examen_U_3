function obtenerOpcionPC() {
    const opciones = ["Piedra", "Papel", "Tijera"]
    const indiceAleatorio = Math.floor(Math.random() * opciones.length)
    return opciones[indiceAleatorio]
}

function determinarGanador(jugador, pc) {
    if (jugador === pc) {
        return "Es un empate"
    } 
    if (
        (jugador === "Piedra" && pc === "Tijera") ||
        (jugador === "Papel" && pc === "Piedra") ||
        (jugador === "Tijera" && pc === "Papel")
    ) {
        return "Ganaste"
    } 
    return "Perdiste"
}

function jugarPiedraPapelTijera() {
    const opcionJugador = prompt("Elige: Piedra, Papel o Tijera").trim()
    const opcionPC = obtenerOpcionPC()

    if (!["Piedra", "Papel", "Tijera"].includes(opcionJugador)) {
        console.log("Opción no válida. Por favor, elige Piedra, Papel o Tijera.")
        return
    }

    console.log(`Elegiste: ${opcionJugador}`)
    console.log(`El PC eligió: ${opcionPC}`)
    console.log(determinarGanador(opcionJugador, opcionPC))
}
jugarPiedraPapelTijera()
