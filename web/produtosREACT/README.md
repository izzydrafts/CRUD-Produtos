# Produtos React

Um sistema simples de gerenciamento de produtos desenvolvido com **React**, **React Router**, **Axios** e **Material-UI**.  
Permite listar, cadastrar, editar e excluir produtos de forma interativa.

---

## 📝 Funcionalidades

- Listar todos os produtos (`ID`, `Nome`, `Preço` e `Descrição`)
- Cadastrar novo produto
- Editar produto existente
- Excluir produto
- Navegação com **NavBar** entre "Produtos" e "Novo Produto"
- Layout estilizado com cores **vermelho e preto**, centralizado e responsivo

---

## ⚙️ Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Material-UI](https://mui.com/)
- [Node.js](https://nodejs.org/)

---
```bash
## 📂 Estrutura do Projeto
src/
├─ components/
│ ├─ NavBar.jsx
│ ├─ ProdutoForm.jsx
│ └─ ProdutoTable.jsx
├─ pages/
│ ├─ ListarProdutos.jsx
│ ├─ NovoProduto.jsx
│ └─ EditarProduto.jsx
├─ routes/
│ └─ AppRoutes.jsx
├─ services/
│ └─ api.js
├─ App.jsx
└─ App.css

```
---

## 🚀 Como Rodar o Projeto

1. Clone o repositório:

```bash
git clone <seu-repo-aqui>
cd produtosREACT


Instale as dependências:

npm install


Inicie o servidor de desenvolvimento:

npm run dev


Abra o navegador em:

http://localhost:5173/

```
---
```bash
🔧 Configuração da API

O projeto usa Axios para se comunicar com a API.
No arquivo src/services/api.js:

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/produtos", // Ajuste o endpoint da sua API
});

export default api;
```
---
🖌️ Estilo

Fundo: preto escuro (#1a1a1a)

Texto: branco (#fff)

Botões e destaques: vermelho (#ff0000 ou tons de vermelho)

Layout centralizado e responsivo usando Flexbox e Material-UI
 ----
⚠️ Observações

Certifique-se de que a API esteja rodando no endpoint correto (http://localhost:3000/produtos).

Evite renderizar mais de um <Router> no projeto, isso causa erros de navegação.

Para desenvolvimento, recomenda-se instalar React DevTools:
https://react.dev/link/react-devtools
----
📄 Licença

Este projeto é open-source e pode ser utilizado livremente.

----

Isabelle Mendes - ADS 4 Semestre



