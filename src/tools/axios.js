import axios from 'axios';

export const axiosInstance = axios.create({
	baseURL: process.env.REACT_BACKEND_APP_URL || 'http://localhost:3000',
	headers: {
		'content-type': 'application/json;',
	},
});
