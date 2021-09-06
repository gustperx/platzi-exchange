const URL = "https://api.coincap.io/v2";

const getAssets = () => {
  try {
    return fetch(`${URL}/assets?limit=20`)
      .then((resp) => resp.json())
      .then((resp) => resp.data);
  } catch (error) {
    console.log(error);
  }
};

const getAsset = (coin) => {
  return fetch(`${URL}/assets/${coin}`)
    .then((res) => res.json())
    .then((res) => res.data);
};

const getAssetHistory = (coin) => {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();

  return fetch(
    `${URL}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then((res) => res.json())
    .then((res) => res.data);
};

const getMarkets = (coin) => {
  return fetch(`${URL}/assets/${coin}/markets?limit=5`)
    .then((res) => res.json())
    .then((res) => res.data);
};

const getExchange = (id) => {
  return fetch(`${URL}/exchanges/${id}`)
    .then((res) => res.json())
    .then((res) => res.data);
};

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange,
};
