export default async function UseCoins() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=7d"
  );
  const data = await res.json();
  if (res.ok) {
    return { data };
  } else {
    throw new Error(res.statusText);
  }
}

const getCoinDetail = async (coinId) => {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`);
  const data = await res.json();
  if (res.ok) {
    return { data };
  } else {
    console.log(res.statusText);
    throw new Error(res.statusText);
  }
};

export { getCoinDetail };

const searchForPrices = async ({ name, startTime, endTime }) => {
  const url = `https://api.coingecko.com/api/v3/coins/${name}/market_chart/range?vs_currency=usd&from=${startTime}&to=${endTime}`;
  const res = await fetch(url);
  const data = await res.json();
  if (res.ok) {
    return { data };
  } else {
    console.log(res.statusText);
    // throw new Error(res.statusText);
  }
};

export { searchForPrices };
