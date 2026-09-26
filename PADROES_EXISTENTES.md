No código, identifiquei alguns padrões que já aparecem de forma simples. O 
modelo.js concentra o acesso ao banco de dados, funcionando de forma parecida 
com um Repository/DAO, enquanto o server.js fica mais voltado para as 
requisições. Também existe a possibilidade de trocar o banco usado nos testes 
com reconfig_bd(), o que lembra injeção de dependência. Esses padrões já 
ajudam a organizar o projeto, mas ainda poderiam ser melhor separados se o 
sistema aumentasse.
