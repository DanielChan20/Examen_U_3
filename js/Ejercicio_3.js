const texto = prompt("Introduce un texto:")
if (texto !== null) { 
    const vocales = "aeiouAEIOU"
    let contador = 0

    for (const letra of texto.toLowerCase()) {
        if (vocales.includes(letra)) {
            contador++
        }
    }

    alert(`El texto contiene ${contador} vocales.`)
} else {
    alert("No introdujiste ningún texto.")
}

