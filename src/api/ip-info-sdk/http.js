import axios from 'axios';

const http = axios.create({
  baseURL: 'http://ipinfo.io',
  params: {
    token: process.env.VUE_APP_IP_INFO_API_KEY,
  },
});

export default http;
