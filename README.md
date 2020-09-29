# Lendo música
### Este é o projeto final da formação de programadores da equipe do aplicativo NÓS.  

<p>
  O aplicativo Lendo música é um buscador de letras de músicas desenvolvido para Android. Ao abrir o aplicativo, o usuário se depara com uma tela de buscas, onde ele pode inserir um artista e o nome de uma música e pressionar o botão buscar para pesquisar a letra dessa música. Essa tela também tem o botão de "Últimas buscas" que, ao ser pressionado, direciona o usuário a uma página listando as suas 10 últimas buscas.
 </p>
 <br>
  Uma vez inseridos artista e música e pressionado o botão de buscar, é feita uma requisição a <a href="https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search">API</a> e a resposta é tratada. Se a letra não for encontrada, o usuário é direcionado para uma tela de erro, dizendo que a letra não foi encontrada. Do contrário, abre-se uma nova tela onde o usuário pode visualizar a letra da música pesquisada.

<br>
## Iniciando o projeto
 * Instale a última versão de [React Native CLI](https://reactnative.dev/docs/0.8/getting-started) e suas dependências
 * Rodar `npm i`
 * Conectar um aparelho físico ou emulador Android
 * Rodar `npm run Android`
 
