A funcionalidade que implementei foi a busca de perguntas por palavra-chave. A 
ideia foi permitir que o usuário digite um termo e receba como resultado as 
perguntas que tenham relação com aquele conteúdo.

Para aplicar o SRP, separei as responsabilidades entre os arquivos. O server.js 
ficou responsável por receber a requisição, o busca.js por tratar a lógica da 
busca e o modelo.js por acessar o banco de dados. Assim, cada parte ficou com uma 
função mais específica.

Um exemplo em modelo.js:

function buscar_perguntas(palavra_chave) {
  const termo = '%' + palavra_chave + '%';

  return bd.queryAll(
    'select * from perguntas where texto like ?',
    [termo]
  );
}

O DIP foi aplicado porque o busca.js não acessa diretamente o modelo.js. Em vez 
disso, ele recebe a função de busca como parâmetro. Isso deixa a função menos 
presa a uma implementação específica.

function buscar_perguntas(palavra_chave, funcao_busca) {
  if (palavra_chave == undefined || palavra_chave.trim() == '') {
    return [];
  }

  return funcao_busca(palavra_chave);
}

Já o OCP aparece porque essa estrutura permite criar outras formas de busca 
depois sem precisar modificar a função principal do busca.js. Basta passar outra 
função de busca.

const perguntas = busca.buscar_perguntas(
  palavra_chave,
  modelo.buscar_perguntas
);
