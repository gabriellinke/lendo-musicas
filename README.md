<h1 align="center">
   <img src="https://user-images.githubusercontent.com/51447706/103010091-7b96a780-4516-11eb-8677-4ca4cbe36e3f.png" />
</h1>

## :tada: Este é o projeto final da formação de programadores da equipe do aplicativo NÓS.  

## :gear: Funcionamento
<p>
  O aplicativo Lendo música é um buscador de letras de músicas desenvolvido para Android. Ao abrir o aplicativo, o usuário se depara com uma tela de buscas, onde ele pode inserir um artista e o nome de uma música e pressionar o botão buscar para pesquisar a letra dessa música. Essa tela também tem o botão de "Últimas buscas" que, ao ser pressionado, direciona o usuário a uma página listando as suas 10 últimas buscas.
 </p>
 <br>
 <p>
  Uma vez inseridos artista e música e pressionado o botão de buscar, é feita uma requisição a <a href="https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search">API</a> e a resposta é tratada. Se a letra não for encontrada, o usuário é direcionado para uma tela de erro, dizendo que a letra não foi encontrada. Do contrário, abre-se uma nova tela onde o usuário confirma se a letra encontrada é a que ele procurava. Após isso, é possível visualizar a letra da música pesquisada.
</p>

## :eyes: Versão demo

<p> O APK está anexado ao projeto e pode ser baixado para o uso do aplicativo.
 
## :camera: Imagens do app
  
<br>
<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/51447706/94498164-dba7d700-01cf-11eb-9857-4d63d8513a0d.png" width="200" />
</p>
<h4 align="center">
  Figura 1: Página inicial.
</h4>


<br>
<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/51447706/94498219-fbd79600-01cf-11eb-9b35-d5310d17e3f2.png" width="200" />
</p>
<h4 align="center">
  Figura 2: Página para confirmar música.
</h4>

<br>
<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/51447706/94498366-52dd6b00-01d0-11eb-90ca-436297374072.png" width="200" />
</p>
<h4 align="center">
  Figura 3: Página com a letra da música.
</h4>

<br>
<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/51447706/94498478-9e901480-01d0-11eb-98d4-ccfa2b1937ce.png" width="200" />
</p>
<h4 align="center">
  Figura 4: Página de letra não encontrada.
</h4>

<br>
<br>
<p align="center">
  <img src="https://user-images.githubusercontent.com/51447706/94498524-c7180e80-01d0-11eb-9ec5-e69912eb0880.png" width="200" />
</p>
<h4 align="center">
  Figura 5: Página com as últimas buscas
</h4>

## :construction_worker: Iniciando o projeto
 * Instale a última versão de [React Native CLI](https://reactnative.dev/docs/0.8/getting-started) e suas dependências
 * Rodar `npm i`
 * Conectar um aparelho físico ou emulador Android
 * Rodar `npm run Android`

 ## :computer: Versão Web
 Este app tem uma versão web desenvolvida em React, que pode ser encontrada [aqui](https://github.com/gabriellinke/lendo-musicas-web).
 
