

const custo = document.getElementById('custo');
const taxa = document.getElementById('taxa');
const margem = document.getElementById('margem');
const botao = document.querySelector('button');
const valorFinal = document.getElementById('valorFinal');

divResultado.style.visibility = "hidden"

botao.addEventListener('click', () => {
    if(custo.value === ""){
        alert("Insira valores válidos para custo do produto, taxa de serviço e margem de lucro.");
    }else {
        vendaCerta();
    }
})


function vendaCerta() {
    const taxa = Number(document.getElementById('taxa').value);

    divResultado.style.visibility = "visible";
    let custoProduto = Number(custo.value);
    let valorMargem = Number(margem.value);

    let precoVenda = custoProduto + (custoProduto * valorMargem);

    let precoDelivery = precoVenda + (precoVenda * taxa);

    let resultado = precoDelivery.toFixed(2);
    valorFinal.innerHTML = resultado;

}
