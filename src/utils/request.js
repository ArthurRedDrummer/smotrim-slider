import { API_URL } from './common'

async function request(path) {
  let url = API_URL + path;
  
  return fetch(url)
    .then(res => res.json())
    .then(res => res.data);
}

export {request}