import axios from 'axios';

const backend = {
  client: axios.create({
    baseURL: 'http://localhost:8080',
    responseType: 'json',
  }),
  options: {
    interceptors: {
      request: [
        (getState, config) => {
          // if (getState().user.token) {
          //   config.headers['Authorization'] = 'Bearer ' + getState().user.token
          // }

          return config
        }
      ],
      response: [
        (getState, response) => {
          return response
        }
      ]
    }
  }
};

export default backend;