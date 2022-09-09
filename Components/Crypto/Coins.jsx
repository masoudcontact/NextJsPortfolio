/** @jsxImportSource theme-ui */
import { useState, useEffect } from "react";
import { Card, Grid, Box } from "theme-ui";
import Pagination from "../../lib/Pagination";
import Paginate from "../../lib/Pagination/Paginate";
import Select from "react-select";
import customDropDownStyles from "../../lib/DropDownStyle";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

function Coins({ coins }) {
  const router = useRouter();
  const coinCTX = coins;
  const [foundCoins, setFoundCoins] = useState(coinCTX);
  const [order, setOrder] = useState("ASC");
  const [isItLoading, setIsItLoading] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [name, setName] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [favShow, setFavShow] = useState(false);
  const paginatedFilteredCoins = Paginate(foundCoins, currentPage, pageSize);
  const paginationOptions = [
    { value: 10, label: "10" },
    { value: 15, label: "15" },
    { value: 20, label: "20" },
    { value: 50, label: "50" },
  ];

  useEffect(() => {
    coinCTX ? setIsItLoading((prev) => false) : setIsItLoading((prev) => false);
  }, [coinCTX]);

  //////////////////////////////////////////// search by filter//////////////////////////////////////////////////
  const filter = (event) => {
    const keyword = event.target.value;

    if (keyword !== "") {
      const results = coinCTX
        .filter((coin) => coin !== null)
        .filter((coin) => {
          return (
            coin.id.startsWith(keyword.toLowerCase()) ||
            coin.symbol.startsWith(keyword.toLowerCase())
          );
        });
      setFoundCoins(results);
      setCurrentPage(1);
    } else {
      setFoundCoins(coinCTX);
      // If the text field is empty, show all users
    }
    setName(keyword);
  };
  ////////////////////////////////////  Sorting ////////////////////////////////////////////////////////////
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...foundCoins].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setFoundCoins(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...foundCoins].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setFoundCoins(sorted);
      setOrder("ASC");
    }
  };
  //////////////////////////////sort onfav///////////////////////////////////////////////////////////////
  const sortOnFav = (col) => {
    if (order === "ASC") {
      const sorted = [...foundCoins].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setFoundCoins(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...foundCoins].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setFoundCoins(sorted);
      setOrder("ASC");
    }
  };

  ////////////////////////////////////Pagination////////////////////////////////////////////////////////////
  const PageChangeHandler = (page) => {
    setCurrentPage(page);
  };

  const optionSelectHandler = (event) => {
    setPageSize(event.value);
    setCurrentPage(1);
  };

  const onRowClick = ({ symbol, id }) => {
    router.push(`/crypto/${id}`);
  };

  // ///////////////////////////////Tops gainer and loser Finder////////////////
  const TopGainer = coinCTX
    ? coinCTX.reduce(
        (max, coin) =>
          coin.price_change_percentage_24h > max
            ? coin.price_change_percentage_24h
            : max,
        coinCTX[0].price_change_percentage_24h
      )
    : 0;

  const TopGainerID = coinCTX
    ? coinCTX.filter(
        (coin) => coin.price_change_percentage_24h === TopGainer
      )[0].id
    : "No Gainer";

  const TopLoser = coinCTX
    ? coinCTX.reduce(
        (min, coin) =>
          coin.price_change_percentage_24h < min
            ? coin.price_change_percentage_24h
            : min,
        coinCTX[0].price_change_percentage_24h
      )
    : 0;
  const TopLoserID = coinCTX
    ? coinCTX.filter((coin) => coin.price_change_percentage_24h === TopLoser)[0]
        .id
    : "No loser";
  // ///////////////////////////////Favorite////////////////
  const addFavoritehandler = (coin) => {
    coinCTX.setFavoritesCoin((prev) => [...prev, coin.id]);
  };

  const removeFavoritehandler = (FavoriteCoin) => {
    coinCTX.setFavoritesCoin((prev) =>
      prev.filter((coin) => coin !== FavoriteCoin.id)
    );
  };

  const itemIsFavorite = (coin) => {
    if (coinCTX.FavoritesCoin) {
      return coinCTX.FavoritesCoin.some((favorite) => favorite === coin.id);
    }
    return false;
  };

  const toggleFavorite = (e, coin) => {
    e.preventDefault();
    localStorage.removeItem("favorites");
    if (itemIsFavorite(coin)) {
      removeFavoritehandler(coin);
    } else {
      addFavoritehandler(coin);
    }
    localStorage.setItem(
      "favoriteCoins",
      JSON.stringify(coinCTX.FavoritesCoin)
    );
  };

  const FavCoinsList = () => {
    if (favShow) {
      const favelistcoin =
        coinCTX &&
        coinCTX.length > 0 &&
        coinCTX.filter((coin) => coinCTX.FavoritesCoin.includes(coin.id));
      setFoundCoins(favelistcoin);
    } else {
      setFoundCoins(coinCTX);
    }
    setFavShow((prev) => !prev);
  };

  const PageHeader = (
    <Head>
      <title>Crypto Currency</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content={`Every Thing About The Crypto Currency , and more`}
      />
    </Head>
  );

  if (isItLoading) {
    return (
      <Card
        sx={{
          maxWidth: 256,
        }}
      >
        {PageHeader}
        <div>
          Loading ...
          <br />
          <progress />
        </div>
      </Card>
    );
  } else {
    return (
      <Card
        sx={{
          color: "primary",
        }}
      >
        {PageHeader}
        {/* ///////////////Search///////////////// */}

        <Grid columns={[1, 2, 1, 5]} gap={1}>
          <Box>
            <input
              style={{ position: "relative" }}
              type="search"
              value={name}
              id="myInput"
              onChange={filter}
              onDoubleClick={() => setShowDetails(!showDetails)}
              placeholder="Search for coin names.."
              list={showDetails ? "suggestions" : undefined}
            />
          </Box>
          <Box>
            <Select
              className="MyDropdown"
              options={paginationOptions}
              onChange={optionSelectHandler}
              placeholder="Select Duration ..."
              defaultValue={{ value: 10, label: "10" }}
              styles={customDropDownStyles}
              theme={(theme) => ({
                ...theme,
                borderRadius: 5,
                colors: {
                  ...theme.colors,
                  text: "red",
                  font: "red",
                  primary25: "#A7A7A8",
                  primary: "grey",
                  neutral80: "black",
                  color: "yellow",
                },
              })}
            />
          </Box>
          <Box>
            <div sx={{ minWidth: ["100%", "50%", "fit-content"] }}>
              <Pagination
                itemsCount={foundCoins ? foundCoins.length : 0}
                pageSize={pageSize}
                onPageChange={PageChangeHandler}
                currentPage={currentPage}
              />
            </div>
          </Box>
          <Box>
            <section type="text" className="dropdown infobox">
              TopGainer | {TopGainerID} {parseFloat(TopGainer).toFixed(2)} %
            </section>
          </Box>
          <Box>
            <section type="text" className="dropdown infobox">
              TopLoser | {TopLoserID} {parseFloat(TopLoser).toFixed(2)} %
            </section>
          </Box>
        </Grid>

        <form>
          <table className="userTable" rules="all">
            <thead>
              <tr>
                <th>image</th>
                <th onClick={FavCoinsList}>Fav</th>
                <th onClick={() => sorting("market_cap_rank")}>Rank</th>
                <th onClick={() => sorting("name")}>Name</th>
                <th onClick={() => sorting("symbol")}>symbol</th>
                <th onClick={() => sorting("current_price")}>current price</th>
                <th onClick={() => sorting("total_volume")}>total volume</th>
                <th onClick={() => sorting("low_24h")}>low 24h</th>
                <th onClick={() => sorting("high_24h")}>high 24h</th>
                <th onClick={() => sorting("price_change_percentage_24h")}>
                  price change24h
                </th>
                {/* <th>7Days Change</th> */}
              </tr>
            </thead>
            <tbody>
              {foundCoins && foundCoins.length > 0 ? (
                paginatedFilteredCoins
                  .filter((coin) => coin !== null)
                  .map(
                    (coin) =>
                      coin !== null && (
                        <tr
                          key={coin.id}
                          // onClick={(e) => onRowClick(coin.id)}
                        >
                          <td
                            onClick={(e) =>
                              onRowClick({ symbol: coin.symbol, id: coin.id })
                            }
                          >
                            <Image
                              src={coin.image}
                              height="50"
                              width="50"
                              alt={coin.image}
                            ></Image>
                          </td>
                          <td>
                            <button
                              onClick={(e) => toggleFavorite(e, coin)}
                              style={{
                                backgroundColor: "#ff000000",
                                border: "0",
                                padding: "0",
                              }}
                            >
                              {itemIsFavorite(coin) ? "❤️" : "🤍"}
                            </button>
                          </td>
                          <td
                            data-label="market_cap_rank"
                            onClick={(e) =>
                              onRowClick({ symbol: coin.symbol, id: coin.id })
                            }
                          >
                            {coin.market_cap_rank}
                          </td>
                          <td
                            data-label="Name"
                            onClick={(e) =>
                              onRowClick({ symbol: coin.symbol, id: coin.id })
                            }
                          >
                            {" "}
                            {coin.name}
                          </td>
                          <td
                            data-label="symbol"
                            onClick={(e) =>
                              onRowClick({ symbol: coin.symbol, id: coin.id })
                            }
                          >
                            {coin.symbol}
                          </td>
                          <td
                            data-label="current_price"
                            onClick={(e) =>
                              onRowClick({ symbol: coin.symbol, id: coin.id })
                            }
                          >
                            {coin.current_price}
                          </td>
                          <td
                            data-label="total_volume"
                            onClick={(e) =>
                              onRowClick({ symbol: coin.symbol, id: coin.id })
                            }
                          >
                            {coin.total_volume}
                          </td>
                          <td
                            data-label="low_24h"
                            onClick={(e) =>
                              onRowClick({ symbol: coin.symbol, id: coin.id })
                            }
                          >
                            {coin.low_24h} $
                          </td>
                          <td
                            data-label="high_24h"
                            onClick={(e) =>
                              onRowClick({ symbol: coin.symbol, id: coin.id })
                            }
                          >
                            {coin.high_24h} $
                          </td>
                          <td
                            data-label="price_change_percentage_24h"
                            style={{
                              color:
                                Math.sign(coin.price_change_percentage_24h) < 0
                                  ? "red"
                                  : "#6adc6a",
                            }}
                            onClick={(e) => onRowClick(coin.id)}
                          >
                            {coin.price_change_percentage_24h}%
                          </td>
                        </tr>
                      )
                  )
              ) : (
                <tr>
                  <td style={{ textAlign: "center", padding: "auto" }}>
                    <h3>No results found!</h3>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </form>
      </Card>
    );
  }
}
export default Coins;
