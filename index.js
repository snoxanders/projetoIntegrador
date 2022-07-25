(async() => {

    const database = require('./db')
    const Products = require('./database/models/products')
    await database.sync();

    const novoProduto = await Produto.create({
        nome: 'Macbook Air Apple 13.3, Processador M1, 16GB, SSD 1TB, Space Grey',
        preco: 670.00,
        descricao: 'Produto para uso profissinal para desenvolvedores',
        disponibilidade: 1
    })
    console.log(novoProduto);

})();

Products.create({
    name: 'Macbook Air Apple 13.3, Processador M1, 16GB, SSD 1TB, Space Grey',
    price: 670.00,
    description: 'Produto para uso profissinal para desenvolvedores',
    available: 1
})