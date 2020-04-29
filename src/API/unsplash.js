import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 68CAFVUDIXlet8wmORN6pnSdPtjLf_NGACSEFwOt-Q0'
    }
});