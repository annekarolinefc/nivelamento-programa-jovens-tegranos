const btn = document.getElementById('calcular')

btn.addEventListener('click', function(e){
    e.preventDefault();

    //capturando os valores dentro do input
    const base = Number(document.getElementById('base').value)
    const altura = Number(document.getElementById('altura').value)

    //const area = base * altura;
    const area = CalculaArea(base, altura);
    //const perimetro = ((base*2) + (altura*2))
    const perimetro = CalculaPerimetro(base, altura)
    //const diagonal = Math.SQRT2(Math.pow(base,2) + Math.pow(altura,2))
    const diagonalRetangulo = CalculaDiagonalRetangulo(base, altura)

    document.getElementById('resultado').innerHTML = `ÁREA: ${area} 
    / PERÍMETRO: ${perimetro} 
    / DIAGONAL: ${diagonalRetangulo}`

    console.log(area)
    console.log(perimetro)
    console.log(diagonalRetangulo)

})


function CalculaArea(base, altura){
    return (base*altura).toFixed(4)
}

function CalculaPerimetro(base, altura){
    return ((base*2) + (altura*2)).toFixed(4)
}

function CalculaDiagonalRetangulo(base, altura){
    return (Math.sqrt(Math.pow(base,2) + Math.pow(altura,2))).toFixed(4)
}