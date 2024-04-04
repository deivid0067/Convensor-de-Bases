function converter() {
    let NumeroX = Numero_a_converter.value;
    let seletor = Number(seletor_de_bases.value)

    let decimal = parseInt(NumeroX, seletor);

    let octal = parseInt(NumeroX, seletor).toString(8);

    let hexadecimal = parseInt(NumeroX, seletor).toString(16).toUpperCase();

    let binario = parseInt(NumeroX, seletor).toString(2);
    let Resultado =

            `Esse número na Base Octal é : ${octal} 
<br>
<br>
Esse Número em Binario é : ${binario}
<br>
<br>
Esse Número em Hexadecimal é: ${hexadecimal}
<br>
<br>
Esse Número em Decimal é: ${decimal}`

    document.getElementById("bases_convertidas").innerHTML = Resultado;



}


const validacaoBinaria = e => {
    let validacao = /^[0-1]*$/
    let key = e.key

    if (!validacao.test(key)) {
            e.preventDefault()
    }
}



const validacaoDecimal = e => {
    let validacao = /^[0-9]*$/
    let key = e.key

    if (!validacao.test(key)) {
            e.preventDefault()
    }
}


const validacaoOctal = e => {
    let validacao = /^[0-7]*$/
    let key = e.key

    if (!validacao.test(key)) {
            e.preventDefault()
    }
}

const validacaoHexadecimal = e => {
    let validacao = /^[0-9a-fA-F]*$/
    let key = e.key

    if (!validacao.test(key)) {
            e.preventDefault()
    }
}


const validate = e => {
    let selecionarBase = parseInt(seletor_de_bases.value);
    switch (selecionarBase) {
            case 2:
                    validacaoBinaria(e)
                    break;
            case 10:
                    validacaoDecimal(e)
                    break;
            case 8:
                    validacaoOctal(e)
                    break;
            case 16:
                    validacaoHexadecimal(e)
                    break;
    }
}





Numero_a_converter.addEventListener('keypress', validate)
seletor_de_bases.addEventListener('change', () => {
    Numero_a_converter.value = ""
})


