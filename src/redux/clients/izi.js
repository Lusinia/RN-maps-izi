import axios from 'axios';

const izi = {
  client: axios.create({
    baseURL: 'https://api.izi.travel',
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

export default izi;