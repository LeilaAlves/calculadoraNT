function somar() {
    let numeroA = numA.value
    let numeroB = numB.value

    if (!numeroA || !numeroB || numeroA < 0 || numeroB < 0) {

        res.value = "Digite os números"
        return
    } else {
        res.value = parseInt(numeroA) + parseInt(numeroB)
        return
    }

}

somar()