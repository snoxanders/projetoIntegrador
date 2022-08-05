'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('products', [{
                name: "Macbook Air Apple 13.3´, Processador M1, 16GB, SSD 1TB, Space Grey - MGQN3BZ/A",
                description: "Uma potência no ar Com o chip M1 da Apple, nosso notebook mais fino e leve ficou irreconhecível. Por dentro. A CPU e a GPU estão mais rápidas, até 3,5 vezes e até cinco vezes, respectivamente. Nosso Neural Engine mais avançado deixa o aprendizado de máquina até nove vezes mais veloz. A bateria oferece mais tempo de duração. E trocamos a ventoinha pelo silêncio. Nunca tanto desempenho esteve reunido em um MacBook Air. Um pequeno chip, uma grande revolução Nosso primeiro chip projetado especialmente para o Mac acaba de chegar. Com impressionantes 16 bilhões de transistores, o M1 da Apple é um sistema em um chip (SoC). Isso quer dizer que ele reúne CPU, GPU, Neural Engine, conexões e outros recursos em uma peça só, e minúscula. Ele traz desempenho incrível, tecnologias exclusivas e o consumo de energia mais eficiente da indústria. O chip M1 é mais do que um avanço. É uma nova categoria. CPU de 8 núcleos Trabalha muito. A bateria, quase nada O M1 tem a CPU mais rápida que já produzimos. Com tanto processamento, o MacBook Air agora é capaz de realizar tarefas pesadas, como editar vídeos com qualidade profissional e rodar jogos cheios de ação. Além de ter velocidade até 3,5 vezes maior do que a geração anterior, a CPU de oito núcleos do chip M1 combina núcleos de alto desempenho e núcleos de eficiência para fazer trabalhos do dia a dia com apenas um décimo da energia.",
                available: 1,
                price: 54000.00
            },
            {
                name: "Macbook Air Apple 13.3´, Processador M1, 16GB, SSD 1TB, Space Grey - MGQN3BZ/A",
                description: "Uma potência no ar Com o chip M1 da Apple, nosso notebook mais fino e leve ficou irreconhecível Uma potência no ar Com o chip M1 da Apple, nosso notebook mais fino e leve ficou irreconhecível Uma potência no ar Com o chip M1 da Apple, nosso notebook mais fino e leve ficou irreconhecível Uma potência no ar Com o chip M1 da Apple, nosso notebook mais fino e leve ficou irreconhecível",
                available: 1,
                price: 54000.00
            },
            {
                name: "Macbook Air Apple 13.3´, Processador M1, 16GB, SSD 1TB, Space Grey - MGQN3BZ/A",
                description: "Uma potência no ar Com o chip M1 da Apple, nosso notebook mais fino e leve ficou irreconhecível Uma potência no ar Com o chip M1 da Apple, nosso notebook mais fino e leve ficou irreconhecível Uma potência no ar Com o chip M1 da Apple, nosso notebook mais fino e leve ficou irreconhecível Uma potência no ar Com o chip M1 da Apple, nosso notebook mais fino e leve ficou irreconhecível",
                available: 1,
                price: 54000.00
            },
            {
                name: "Macbook Air Apple 13.3´, Processador M1, 16GB, SSD 1TB, Space Grey - MGQN3BZ/A",
                description: "Uma potência no ar Com o chip M1 da Apple, nosso notebook mais fino e leve ficou irreconhecível Uma potência no ar Com o chip M1 da Apple, nosso notebook mais fino e leve ficou irreconhecível Uma potência no ar Com o chip M1 da Apple, nosso notebook mais fino e leve ficou irreconhecível Uma potência no ar Com o chip M1 da Apple, nosso notebook mais fino e leve ficou irreconhecível",
                available: 1,
                price: 54000.00
            },
            {
                name: "Macbook Air Apple 13.3´, Processador M1, 16GB, SSD 1TB, Space Grey - MGQN3BZ/A",
                description: "Uma potência no ar Com o chip M1 da Apple, nosso notebook mais fino e leve ficou irreconhecível Uma potência no ar Com o chip M1 da Apple, nosso notebook mais fino e leve ficou irreconhecível Uma potência no ar Com o chip M1 da Apple, nosso notebook mais fino e leve ficou irreconhecível Uma potência no ar Com o chip M1 da Apple, nosso notebook mais fino e leve ficou irreconhecível",
                available: 1,
                price: 54000.00
            }, {
                name: "Macbook Air Apple 13.3´, Processador M1, 16GB, SSD 1TB, Space Grey - MGQN3BZ/A",
                description: "Uma potência no ar Com o chip M1 da Apple, nosso notebook mais fino e leve ficou irreconhecível Uma potência no ar Com o chip M1 da Apple, nosso notebook mais fino e leve ficou irreconhecível Uma potência no ar Com o chip M1 da Apple, nosso notebook mais fino e leve ficou irreconhecível Uma potência no ar Com o chip M1 da Apple, nosso notebook mais fino e leve ficou irreconhecível",
                available: 1,
                price: 54000.00
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('products', null, {});
    }
};