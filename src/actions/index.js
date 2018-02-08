import axios from 'axios';

const API_KEY = 'a4b24d00609c194d8a6219a3e6e2f9a9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

	const url = `${ROOT_URL}&q=${city},IN`;
	const request = axios.get(url);

	// console.log(request);

	return{
		type: FETCH_WEATHER,
		payload: request
	};
}