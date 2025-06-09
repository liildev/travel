import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://travel-api.bpm-tripusk.uz/api/v1/somo-travel',
	timeout: 10_000,
});
