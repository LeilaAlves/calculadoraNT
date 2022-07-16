function somar() {
    let numeroA = numA.value
    let numeroB = numB.value

    if (!numeroA || !numeroB || numeroA < 0 || numeroB < 0) {

        alert(res.value) = "Preencha os campos para somar"
        return
    } else {
        res.value = parseInt(numeroA) + parseInt(numeroB)
        return
    }

}