import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:4000' });

export const getProduct = (id) => API.get(`/api/product/find/${id}`);

