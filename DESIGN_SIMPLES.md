O código do backend segue bem a ideia de design simples porque 
faz apenas o necessário para o funcionamento atual do sistema. 
As rotas são diretas, chamam as funções do modelo.js e não 
criam estruturas extras sem necessidade, o que está de acordo 
com o YAGNI. Como possibilidade de simplificação, alguns 
trechos podem ser reduzidos, como a leitura dos dados de req.
body, além de deixar o tratamento de erros mais consistente 
colocando as chamadas ao modelo dentro do try.
