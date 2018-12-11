import MapboxClient from 'mapbox';
import config from '../config';

const client = new MapboxClient(config.mapBoxKey);
export default client;