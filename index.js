const tiposPagamento = {
    dinheiro: 'Dinheiro',
    transferencia: 'Pix',
    cartaoCredito: 'Credito',
    cartaoDebito: 'Debito'
};

const clientes = [
    {
        nome: 'Maria',
        produto: 'Cadeira de Praia',
        valorProduto: 35.99,
        metodoPagamento: tiposPagamento.dinheiro,
        parcelas: 1,
    }, {
        nome: 'João',
        produto: 'Pacote de Doces',
        valorProduto: 60.99,
        metodoPagamento: tiposPagamento.pix,
        parcelas: 1,
    }, {
        nome: 'Bruxinha',
        produto: 'Faca de açougue usada, cega!',
        valorProduto: 49.99,
        metodoPagamento: tiposPagamento.credito,
        parcelas: 4,
    }, {
        nome: 'Prima da Bruxa',
        produto: 'Colher de pegar feijão',
        valorProduto: 25.99,
        metodoPagamento: tiposPagamento.debito,
        parcelas: 1,
    },
]

for (let i = 0; i < clientes.length; i++) {
    let cliente = clientes[i];
    let nomeCliente = cliente.nome;
    let produtoCliente = cliente.produto;
    let valorProdutoCliente = cliente.valorProduto;
    let metodoPagamentoCliente = cliente.metodoPagamento;
    let parcelaCliente = cliente.parcelas;

    let observacaoFinal = "";

    if (metodoPagamentoCliente === 'Dinheiro' || metodoPagamentoCliente === "Pix") {
        observacaoFinal = "recebeu 15% de desconto";
    } else if (metodoPagamentoCliente === 'Debito' || metodoPagamentoCliente === 2) {
        observacaoFinal = "recebeu 10% de desconto";
    } else if (metodoPagamentoCliente === 'Credito' || metodoPagamentoCliente === 3) {
        if (parcelaCliente <= 2) {
            observacaoFinal = "não recebeu desconto";
        } else {
            observacaoFinal = "pagará 10% de juros";
        }
    }
    const valorPagoPeloCliente = valorPagoPorTipo(valorProdutoCliente, metodoPagamentoCliente, parcelaCliente);
    console.log(`O cliente ${nomeCliente} comprou o produto: ${produtoCliente} que está no valor de R$${valorProdutoCliente} com o metodo de pagamento ${metodoPagamentoCliente}
    pagará o valor final de R$${valorPagoPeloCliente} onde: ${observacaoFinal}!`)
}

function valorPagoPorTipo(valorPorEtiqueta, metodo, parcela) {
    let mensagemPagamento = "";
    let calculo = 0;
    let valorProdutoComJuros = valorPorEtiqueta + calculo;

    if (metodo === 'Dinheiro' || metodo === "Pix" || metodo === 1) {
        calculo = valorPorEtiqueta * 0.15;
        condicao = "recebeu 15% de desconto";
        let valorProdutoComDesconto = valorPorEtiqueta - calculo;
        mensagemPagamento = valorProdutoComDesconto.toFixed(2);
        return mensagemPagamento;
    } else if (metodo === "Debito" || metodo === 2) {
        calculo = valorPorEtiqueta * 0.1;
        condicao = "recebeu 10% de desconto";
        let valorProdutoComDesconto = valorPorEtiqueta - calculo;
        mensagemPagamento = valorProdutoComDesconto.toFixed(2);
        return mensagemPagamento;
    } else if (metodo === "Credito" || metodo === 3) {
        if (parcela <= 2) {
            condicao = "não recebeu desconto";
            mensagemPagamento = valorPorEtiqueta;
            return mensagemPagamento;
        } else {
            calculo = valorPorEtiqueta * 0.1;
            condicao = "pagará 10% de juros";
            mensagemPagamento = valorProdutoComJuros;
            return mensagemPagamento;
        }
    }
}
