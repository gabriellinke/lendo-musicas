import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.lyrics.ovh/v1/' // Link base da API
})

export default api;