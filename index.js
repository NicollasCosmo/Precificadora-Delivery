

const custo = document.getElementById('custo');
const taxa = document.getElementById('taxa');
const margem = document.getElementById('margem');
const botao = document.querySelector('button');
const valorFinal = document.getElementById('valorFinal');

divResultado.style.visibility = "hidden";

botao.addEventListener('click', () => {
    if(custo.value === ""){
        alert("Insira valores válidos para custo do produto, taxa de serviço e margem de lucro.");
    }else {
        vendaCerta();
    }
})


function vendaCerta() {
    const taxa = Number(document.getElementById('taxa').value);         //extrai o valor da taxa

    divResultado.style.visibility = "visible";             //  exibe o resultado para o usuário
    let custoProduto = Number(custo.value);         // extrai o valor do custo passando de string para número
    let valorMargem = Number(margem.value);        // extrai o valor da margem passando de string para número

    let precoVenda = custoProduto + (custoProduto * valorMargem); // cálculo para obter preço de venda

    let precoDelivery = precoVenda + (precoVenda * taxa);      //cálculo para preço de venda + tx do delivery

    let resultado = precoDelivery.toFixed(2);   // valor com apenas duas casas decimais  
    valorFinal.innerHTML = resultado;

}
