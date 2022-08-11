'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('produto', [
    {
      id: 301,
      name: "Macbook Air Apple 13.3´, Processador M1, 16GB, SSD 1TB, Space Grey - MGQN3BZ/A",
      description: "Uma potência no ar Com o chip M1 da Apple, nosso notebook mais fino e leve ficou irreconhecível. Por dentro. A CPU e a GPU estão mais rápidas, até 3,5 vezes e até cinco vezes, respectivamente. Nosso Neural Engine mais avançado deixa o aprendizado de máquina até nove vezes mais veloz. A bateria oferece mais tempo de duração. E trocamos a ventoinha pelo silêncio. Nunca tanto desempenho esteve reunido em um MacBook Air. Um pequeno chip, uma grande revolução Nosso primeiro chip projetado especialmente para o Mac acaba de chegar. Com impressionantes 16 bilhões de transistores, o M1 da Apple é um sistema em um chip (SoC). Isso quer dizer que ele reúne CPU, GPU, Neural Engine, conexões e outros recursos em uma peça só, e minúscula. Ele traz desempenho incrível, tecnologias exclusivas e o consumo de energia mais eficiente da indústria. O chip M1 é mais do que um avanço. É uma nova categoria. CPU de 8 núcleos Trabalha muito. A bateria, quase nada O M1 tem a CPU mais rápida que já produzimos. Com tanto processamento, o MacBook Air agora é capaz de realizar tarefas pesadas, como editar vídeos com qualidade profissional e rodar jogos cheios de ação. Além de ter velocidade até 3,5 vezes maior do que a geração anterior, a CPU de oito núcleos do chip M1 combina núcleos de alto desempenho e núcleos de eficiência para fazer trabalhos do dia a dia com apenas um décimo da energia.",
      available: 1,
      price: 670.00,
      rotaImg:'<img class="foto-produto" src="/images/imagesProdutos/note1.png" alt="mackbook">'
  },
  {
    id: 302,
      name: "Notebook Acer Aspire 5 Intel Core i5-10210U, 8GB RAM, SSD 256GB, 15.6 Full HD, Windows 11 Home, Prata - A515-54-57CS",
      description: "Os notebooks da linha Aspire 5 são convenientemente portáteis e elegantes para acompanhar suas tarefas do dia a dia. Os recursos tecnológicos de sua confiança ao seu lado sempre que precisar. Desempenho suficiente para todas as tarefas, com Processador Intel Core 10ª geração. Você cria, edita, compartilha e assiste vídeos, fotos e imagens sem dificuldades.Desempenho e Confiabilidade. Os notebooks da linha Aspire 5 utilizam os processadores Intel® de 10 ª geração que possuem desempenho muito superior em relação a geração anterior de processadores.Com até quatro núcleos para renderização e edição mais rápidas e muito mais, tudo em um notebook com um belo design. Um mundo de cores e detalhes A tela de 15,6 Full HD entrega uma experiência de imagens muito rica,perfeita para assistir seus filmes e editar seus projetos em vídeo.",
      available: 1,
      price: 390.00,
      rotaImg:'<img class="foto-produto" src="/images/imagesProdutos/note2.png" alt="Acer">'
  },
  {
      id: 303,
      name: "Notebook Gamer Lenovo IdeaPad Gaming 3i Intel Core i5-10300H, GeForce GTX 1650, 8GB RAM, SSD 256GB, Tela 15.6 FHD, Linux, Azul - 82CGS00100",
      description: "Com melhor performance Notebook Gamer Lenovo Gaming 3i novo design com 10 Geração de Processadores Intel Core i5-10300H e placa de vídeo NVIDIA GeForce GTX 1650 4GB, ideal para gamers e usuários que também precisam de alta performance Com tela de 15.6'' Full HD WVA Antirreflexo para melhor definição de imagem e cores. O armazenamento SSD PCIe NVMe é 10x mais rápido que um HDD 2.5” SATA, você terá mais segurança ao armazenar seus dados. Design eficiente para melhor desempenho O teclado retroiluminado em LED azul, deixa o computador mais atraente e também favorece a performance para jogos em lugares com pouca iluminação. Silencioso e não esquenta: projetado com um sistema de resfriamento otimizado composto por 2 coolers e 4 saídas de ar para suportar o alto desempenho do notebook. Sua privacidade pessoal é muito importante. É por isso que o Ideapad Gaming 3i está equipado com prática porta de privacidade da webcam. Quando não estiver em uma chamada de vídeo ou gravando algo, basta deslizá-la. Ideapad bateria que dura e te permite jogar mais Com até 9.6 horas de duração de bateria o Ideapad Gaming 3i permite que você jogue por muito mais tempo. Além de possuir a tecnologia de carregamento rápido: quinze minutos de carregamento garante até duas horas de uso. A Lenovo coloca o Ideapad Gaming 3i à prova em testes de resistência altamente estressantes como: altas e baixas temperaturas, choque térmico, quebra e vibração, certificando a preocupação com a segurança e qualidade. Através de testes militares, mantém a convicção da melhor escolha sempre",
      available: 1,
      price: 570.00,
      rotaImg:'<img class="foto-produto" src="/images/imagesProdutos/note3.png" alt="Lenovo">'
  },
  {
      id: 304,
      name: "Notebook Gamer Acer Nitro 5 AMD Ryzen 7-4800H",
      description: "Atualize Seus Conceitos De Potência Brutal. Um trem expresso direto para o centro da ação está chegando. O notebook gamer Acer Aspire Nitro 5 é a nova geração, com uma configuração que não treme para os jogos mais pesados. Embarque agora e prepare-se para a potência máxima. A super placa de vídeo NVIDIA GeForce GTX 1650 com 4 GB de memória dedicada GDDR6 traz a performance que você precisa para surpreender seus adversários e jogar com alto nível de realismo. Se é poder que você quer para chegar mais rápido ao level avançado, conte com o desempenho do Processador AMD Ryzen 7 4800H, além dos 16 GB de memória tipo DDR4, expansível até 32 GB. O Acer Aspire Nitro 5 vem equipado com 512 GB SSD M.2 NVMe + 1 TB HDD, o que promove alta velocidade de leitura e gravação. Com seu sistema operacional e jogos instalados nele, tudo abrirá em poucos segundos! A tela de 15,6” IPS Full HD transforma a sua experiência e te faz mergulhar de verdade na ação. O recurso IPS permite que você enxergue bem o jogo até dos ângulos mais complicados. ",
      available: 1,
      price: 590.00,
      rotaImg:'<img class="foto-produto" src="/images/imagesProdutos/note4.png" alt="AcerNitro">'
  },
  {
      id: 305,
      name: "Notebook Asus AMD Ryzen 5-3500U, 8GB RAM, SSD 256GB, 15,6', Radeon Vega 8, Windows 11 Home, Cinza - M515DA-BR1213W",
      description: "Asus MD15 um dos menores notebooks de 15 polegadas do mundo Seja para trabalho ou lazer, o ASUS M515 é um notebook que oferece desempenho poderoso e visuais envolventes. Sua tela NanoEdge possui um revestimento antirreflexo fosco para uma experiência verdadeiramente envolvente. O M515 é equipado com até processador AMD Ryzen e memória de 8 GB. Armazenamento rápido com SSD com até 256GB PCIe SSD. Mais velocidade no seu dia a dia O ASUS M515 possui armazenamento SSD, que além de ser muito mais rápido que o HD convencional, é menor, mais leve e não tem partes mecânicas extremamente sensíveis a impactos e solavancos. Isso garante maior proteção aos dados armazenados no seu notebook, para que você possa trabalhar sem preocupações, com alto desempenho e produtividade, mesmo em um veículo em movimento. Rápido e eficiente Com processadores até SérioAMD Ryzen com 8 GB de memória, o ASUS M515 ajuda você a fazer as coisas com rapidez e eficiência. Tenha uma visão mais ampla do mundo A tela NanoEdge dá ao ASUS M515 uma vasta área de tela para uma experiência de visualização envolvente seja para o trabalho ou lazer. Com tela FHD de visão ampla apresenta um revestimento antirreflexo para reduzir distrações indesejadas de reflexos irritantes, para que você possa realmente se concentrar no que está à sua frente. ",
      available: 1,
      price: 370.00,
      rotaImg:'<img class="foto-produto" src="/images/imagesProdutos/note5.png" alt="Asus">'
  }, {
      id: 306,
      name: "Notebook Lenovo Ultrafino IdeaPad 3i",
      description: "Lenovo IdeaPad 3i possui design leve e compacto. Com  tela antirreflexo de 15.6 para mais conforto visual. Notebook ideal para todos os momentos. Do desempenho e entretenimento com placa de vídeo NVIDIA® GeForce® MX330 com 2GB GDDR5 dedicados. Conta com WiFi AC ultrarrápido e teclado numérico para trabalhar com mais agilidade nas suas planilhas. O armazenamento SSD PCIe é 10x mais rápido* que um HDD 2.5” SATA, você terá mais segurança ao armazenar seus dados. Nitidez e alta qualidade de som com certificação Dolby Audio. Sua privacidade pessoal é muito importante. É por isso que o IdeaPad 3i está equipado com porta de privacidade da webcam. Quando não estiver em uma chamada de vídeo ou gravando algo, basta deslizá-la. Faça vídeo-conferências em alta-definição com a câmera HD-720p.",
      available: 1,
      price: 330.00,
      rotaImg:'<img class="foto-produto" src="/images/imagesProdutos/note6.png" alt="LenovoUltra">'
  },
  ], {}),
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('produto', null, {});
  }
};


