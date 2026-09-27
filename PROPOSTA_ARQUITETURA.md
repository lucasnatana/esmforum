- Proposta de Separação em Camadas

Na camada de apresentação, eu deixaria apenas as rotas da API e a comunicação com o 
frontend. Ela receberia as requisições e retornaria as respostas, sem concentrar 
regras do sistema. As rotas poderiam ser separadas em arquivos como perguntasRoutes.
js e respostasRoutes.js.

Na camada de negócio, ficariam as regras das funcionalidades, como busca por 
palavra-chave, categorização, votação e notificações. Essa parte receberia os dados 
das rotas, aplicaria as regras e chamaria a camada de dados quando fosse necessário.

Na camada de dados, eu deixaria somente o acesso ao banco SQLite, com módulos 
responsáveis por perguntas, respostas e usuários. O fluxo seria simples: frontend, 
rota, regra de negócio, banco de dados, com a resposta voltando pelo mesmo 
caminho.

- Proposta de Aplicação do MVC

Eu aplicaria o MVC no backend principalmente na busca por palavra-chave e na 
categorização de perguntas. Os Models ficariam responsáveis pelos dados e pelo 
acesso ao banco, enquanto os Controllers receberiam as requisições e chamariam as 
operações necessárias. Como o backend funciona como uma API, as Views seriam as 
respostas em JSON enviadas ao frontend.

Na prática, o usuário faria uma requisição pelo frontend, a rota encaminharia para 
o Controller, e o Controller chamaria o Model para buscar ou salvar os dados. 
Depois, o resultado seria devolvido em JSON. Isso deixaria o código mais organizado 
e separaria melhor cada responsabilidade.

Exemplo de resposta JSON:

res.json({
  perguntas: perguntas
});

ou:

res.json({
  mensagem: "Pergunta cadastrada",
  categoria: categoria
});

Diagrama MVC:

```mermaid
flowchart LR
    U[Usuário] --> R[Routes]
    R --> C[Controller]
    C --> M[Model]
    M --> B[Banco SQLite]
    B --> M
    M --> C
    C --> V[Resposta JSON]
    V --> U
