src = source (código fonte) 

dentro da src-> Seu código fonte
fora da src -> Arquivos de configuração

Servidor que sustenta uma aplicação

## DEPENDENCIAS
cors - controla quem pode acessar a aplicação
Arquivos de configuração desacoplados do servidor -> dotenv(guarda o que é sensivel)
express -> aplicações mais efetivas com api's rest

## Camadas

- Controllers: Controlar quem acessa e controlar as respostas de devolução (request e responses)

- Rotas: Quem faz o apontamento de endereços para os nossos controladores

- Model: é a forma de entrada/saida de dados no seu servidor

- Config: Serve para colocar configurações de outras aplicações (aplicações de terceiros) e dados não sensiveis

- Configurações não embarcadas (.env): serve para isolar dados sensiveis

## REFERENCIAS 

DOCUMENTAÇÃO DAS BIBLIOTECAS
https://www.npmjs.com/package/package

SITE PARA ILUSTRAÇÃO COM EXNTESÃO AO VSCODE
https://www.tldraw.com

PLUGIN PARA TESTAR BACKEND SEM FRONT
Thunder Client