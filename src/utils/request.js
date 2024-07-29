async function request(url) {
  return fetch(url)
    .then(res => res.json())
    .then(res => res.data);
}

export { request }