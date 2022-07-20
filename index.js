(async() => {

    const database = require('./db')
    const Produto = require('./database/models/Produto')
    await database.sync();

    const novoProduto = await Produto.create({
        nome: 'Macbook Air Apple 13.3, Processador M1, 16GB, SSD 1TB, Space Grey',
        preco: 670.00,
        descricao: 'Produto para uso profissinal para desenvolvedores',
        disponibilidade: 1
    })
    console.log(novoProduto);

})();