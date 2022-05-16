const btn = document.querySelector("#enviar"); //CAPTUROU O BOTÃO
btn.addEventListener("click", function(e){
    e.preventDefault();
    //Capturando os valores dos elementos e transformando em number e armazenando em variaveis
    const largura = Number(document.getElementById('larg').value).toFixed(2)
    const comprimento = Number(document.getElementById('comp').value).toFixed(2)
    const valorMetroQuadrado = Number(document.getElementById('mq').value).toFixed(2)

    //Capturando os elementos para mostrar o resultado
    const area=document.getElementById('area')
    const preco=document.getElementById('preco')
    //const resultado = document.getElementById('resultado')

    //CALCULOS
    const areaTerreno = (largura*comprimento).toFixed(2);
    const valorMetroQuadradoTerreno = (areaTerreno*valorMetroQuadrado).toFixed(2)
    console.log(largura)
    console.log(comprimento)
    console.log(valorMetroQuadradoTerreno)
    console.log(areaTerreno)
    console.log(valorMetroQuadradoTerreno)

    //Enviar dados para o arquivo index.html utilizando o atributo ID
    document.getElementById('resultado')
    document.getElementById('area').innerHTML = areaTerreno;
    document.getElementById('preco').innerHTML = valorMetroQuadradoTerreno;

}) 
 //IMPRIMIR NA PAGINA
    //document.write(area)
    //document.write(preco)
