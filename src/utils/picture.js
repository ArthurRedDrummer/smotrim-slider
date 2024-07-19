import { API_URL } from './common'

function getPictureById(id) {
  if (!id) {
    return null;
  }

  return `${API_URL}/pictures/${id}/bq/redirect`
}

export { getPictureById }