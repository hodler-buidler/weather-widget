import axios from 'axios';

const http = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5',
  params: {
    appid: process.env.VUE_APP_OPEN_WEATHER_API_KEY,
  },
});

export default http;
