import axios from 'axios';

// Cria uma instância do Axios com a URL base da API
const api = axios.create({
  baseURL: 'http://leoproti.com.br:8004/produtos',
});

export default api;

