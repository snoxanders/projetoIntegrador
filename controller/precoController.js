const preco = //buscar banco de dacos

    //7 dias

    function semanal(preco) {
        return preco / 4
    };

//15 dias

function quinzenal(preco) {
    return preco / 2
};

//mes

function mensal(preco) {
    return preco
};

//3 meses

function trimestral(preco) {
    return preco * 3
};

//6 meses

function semestral(preco) {
    return preco * 6
};

// 12 meses

function anual(preco) {
    return preco * 12
};

module.exports = { semanal, quinzenal, mensal, trimestral, semestral, anual }