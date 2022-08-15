const preco = produto.price

//7 dias

function semanal(preco) {
    return preco.innerHTML / 4
    console(semanal)
};

//15 dias

function quinzenal(preco) {
    return preco.innerHTML / 2
};

//mes

function mensal(preco) {
    return preco.innerHTML
};

//3 meses

function trimestral(preco) {
    return preco.innerHTML * 3
};

//6 meses

function semestral(preco) {
    return preco.innerHTML * 6
};

// 12 meses

function anual(preco) {
    return preco.innerHTML * 12
};

module.exports = { semanal, quinzenal, mensal, trimestral, semestral, anual }