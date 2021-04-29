const corsApi = 'https://cors-anywhere.herokuapp.com/';
const baseURL = 'http://www.mrsoft.by/data.json';

export const API = {
  async getResults() {
    const data = await fetch(`${corsApi}${baseURL}`);
    return await data.json();
  },
};
