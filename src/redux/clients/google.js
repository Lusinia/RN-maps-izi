import axios from 'axios';

const google = {
  client: axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
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

export default google;