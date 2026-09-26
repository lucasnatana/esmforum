a) Identificação da Arquitetura

O fluxo do sistema começa no usuário, que acessa o frontend em React. O frontend envia as requisições para o backend, onde o server.js recebe e encaminha as operações para o modelo.js. O modelo acessa o banco SQLite e a resposta retorna pelo mesmo caminho até o usuário.

b) Diagrama Arquitetural

```mermaid
flowchart LR
    U[Usuário] --> F[Apresentação: Frontend React]
    F --> S[Backend: server.js - recebe requisições]
    S --> M[Negócio/Dados: modelo.js - processa operações]
    M --> B[Dados: Banco SQLite]
    B --> M
    M --> S
    S --> F
