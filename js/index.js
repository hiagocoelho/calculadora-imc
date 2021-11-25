const calculateIMC = () => {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const IMCValue = peso / (altura * altura);
    let resultado = null;

    if (IMCValue >= 34) resultado = `possui obesidade mórbida.`
    if (IMCValue < 34 && IMCValue >= 30) resultado = `está obeso(a).`
    if (IMCValue < 30 && IMCValue >= 25) resultado = `está acima do peso.`
    if (IMCValue < 25 && IMCValue >= 20) resultado = `está no seu peso normal.`
    if (IMCValue < 20) resultado = `está abaixo do peso.`

    if (peso && altura && IMCValue && resultado) {
        return document.getElementById('resultado')
            .innerText = `${nome}, seu índice de massa corporal (IMC) é ${IMCValue.toFixed(2)}. Você ${resultado}`
    }
}

const clearAllData = () => {
    document.getElementById('nome').value = '';
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('resultado').innerText = '';
}