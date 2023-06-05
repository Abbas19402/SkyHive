import axios from 'axios';

const http = axios.create();
http.interceptors.request.use(
  (config) => {
    let accessToken;
    if(typeof window !== 'undefined') {
        accessToken = window.localStorage.getItem('AT');
    }
    // Set access token dynamically
    config.headers['Authorization'] = `Bearer ${JSON.parse(accessToken)}`;

    // Modify other headers or config properties as needed
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    // Perform any response interception logic here
    return response.data;
  },
  (error) => {
    // Handle response error
    return Promise.reject(error);
  }
);

export default http;
