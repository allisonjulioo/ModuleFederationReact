# Module Federation - WeMovies

Este projeto foi construído utilizando **Module Federation** para arquitetura de microfrontends em aplicações React. O projeto é gerenciado pelo **Lerna** para facilitar a gestão de múltiplos pacotes.

## Visão Geral

A aplicação `Module Federation - WeMovies` é composta por quatro microfrontends:

1. **Container**: Componente principal que compartilha o estado global do carrinho e gerencia a comunicação entre os diferentes microfrontends.
2. **List**: Apresenta a listagem de filmes.
3. **Cart**: Gerencia o carrinho de compras do usuário.
4. **Success**: Tela de sucesso após a finalização da compra.

### Arquitetura do Projeto

A arquitetura do projeto segue o modelo de microfrontends, onde cada parte da aplicação é um microfrontend independente, mas todos compartilham um estado global de carrinho através do Container. Veja o diagrama de arquitetura abaixo para mais detalhes.

![image](https://github.com/user-attachments/assets/cca8fa90-81a0-4374-84a4-d4402bf3e9d7)


### Cobertura de Testes

A cobertura de testes de todos os componentes da aplicação está em **100%**, incluindo statements, branches, funções e linhas de código. Abaixo estão os relatórios de cobertura de testes para cada módulo:

- **List**: 100% em todas as métricas.
- **Cart**: 100% em todas as métricas.
- **Container**: 100% em todas as métricas.
- **Success**: 100% em todas as métricas.

![image](https://github.com/user-attachments/assets/0f3f2f46-ed66-4ec7-9242-fba91b4956e3)

## Instalação

Para rodar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/wefit-test.git
   cd wefit-test
   ```

2. **Instale as dependências**:

   Na raiz do projeto, execute:

   ```bash
   npm install
   ```

## Rodando a Aplicação

Para iniciar a aplicação em ambiente de desenvolvimento, execute:

```bash
npm run start
```

## Rodando os Testes

Para rodar todos os testes de uma vez, execute:

```bash
npm test
```

Você também pode executar os testes individualmente em cada pacote (List, Cart, Container, Success) utilizando o comando de teste dentro de cada diretório de pacote:

```bash
lerna run test --scope=list
lerna run test --scope=cart
lerna run test --scope=container
lerna run test --scope=success
```

## Estrutura de Rotas

A aplicação possui as seguintes rotas:

- **`/`**: Exibe a listagem de filmes.
- **`/cart`**: Exibe o carrinho de compras.
- **`/success`**: Exibe a tela de sucesso após a compra.

## Tecnologias Utilizadas

- **React**: Biblioteca principal para a construção dos componentes da UI.
- **Module Federation**: Utilizado para gerenciar a arquitetura de microfrontends.
- **Lerna**: Ferramenta de gerenciamento de monorepositórios, facilitando a gestão de múltiplos pacotes.
- **Jest**: Utilizado para testes unitários e de integração.

## Contribuindo

Contribuições são bem-vindas! Por favor, faça um fork do repositório e envie um pull request com suas alterações. Para grandes mudanças, abra uma issue primeiro para discutir o que você gostaria de mudar.
