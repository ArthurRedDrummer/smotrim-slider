import { API_URL } from '../utils/common'
import { request } from '../utils/request'

async function getPersons() {
  let path = API_URL + '/boxes/vesti2';

  return await request(path);
}

async function getPersonById(id) {
  let path = API_URL + `/persons/${id}`;

  return await request(path);
}

export {
  getPersons,
  getPersonById
}