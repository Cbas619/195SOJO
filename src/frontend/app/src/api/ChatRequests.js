import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:4000' });

export const createChat = (data) => API.post('/api/chat/chat', data);

export const userChats = (id) => API.get(`/api/chat/${id}`);

export const findChat = (firstId, secondId) => API.get(`/api/chat/find/${firstId}/${secondId}`);