import backend from './backend';
import google from './google';
import izi from './izi';

const clients = {
  default: backend,
  google,
  izi
};


export default clients;