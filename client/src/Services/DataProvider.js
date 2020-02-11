import axios from 'axios';

class DataProvider {

	hostname = '';

	constructor () {
		this.hostname = '//localhost:4000';
	}

	uploadVideo () {
		return axios.post(`${this.hostname}/upload`);
	}

	getVideos () {
		return axios.get(`${this.hostname}/videos`);
	}
}

const DataProviderSingleton = new DataProvider();

export default DataProviderSingleton;