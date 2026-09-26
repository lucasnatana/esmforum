a) Pontos positivos
O código apresenta uma boa separação entre o server.js e o modelo.js. O server.js
recebe as requisições, enquanto o modelo.js concentra as operações com os dados, 
o que segue o princípio de responsabilidade única. Além disso, funções como 
cadastrar_pergunta() e cadastrar_resposta() possuem tarefas bem específicas. 
Outro ponto positivo é a função reconfig_bd(), que permite trocar o banco por uma 
versão simulada nos testes, reduzindo a dependência direta de uma única 
implementação.

b) Oportunidades de melhoria

O server.js concentra várias responsabilidades no mesmo arquivo, como 
configuração do Express, CORS, rotas e inicialização do servidor. Uma melhoria 
seria separar essas partes em arquivos diferentes. Também há um problema no 
cadastro de perguntas, porque o id do usuário está fixado como 1. O ideal seria 
receber esse valor como parâmetro, deixando a função mais flexível para trabalhar 
com usuários diferentes.
