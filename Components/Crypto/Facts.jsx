import React, { useEffect, useState, useContext } from "react";
import Head from "next/head";
import { Card, Grid, Box, Text } from "theme-ui";
import axios from "axios";
import stock from "../../public/Images/stock.png";
import Pagination from "../../lib/Pagination";
import Paginate from "../../lib/Pagination/Paginate";
import Select from "react-select";
import DatePicker from "react-date-picker/dist/entry.nostyle";
import Image from "next/image";
import next from "next";

function Crypto_fun_facts({ coins }) {
  const coinCTX = coins;
  console.log(coinCTX);
  const [foundCoins, setFoundCoins] = useState();
  const [order, setOrder] = useState("ASC");
  const [name, setName] = useState("BTC");
  const [error, setError] = useState();
  const [isItLoading, setIsItLoading] = useState(true);
  const [Invest, setInvest] = useState("100");
  const [LowMiss, setLowMiss] = useState("0");
  const [HighMiss, setHighMiss] = useState("0");

  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  /////////////////page and pagination system

  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const paginatedFilteredCoins = Paginate(
    foundCoins ? foundCoins : "",
    currentPage,
    pageSize
  );
  const paginationOptions = [
    { value: 10, label: "10" },
    { value: 15, label: "15" },
    { value: 20, label: "20" },
    { value: 50, label: "50" },
  ];
  ////////////////////////////////////////////////duration Cotrol maker/////////////////////////////////////////
  const [startDay, setStartDay] = useState();
  const [endDay, setEndDay] = useState();

  function getCompleteDate(setDate) {
    const unixTimestamp = setDate;
    const date = new Date(unixTimestamp * 1000);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const dt = date.getDate();
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const formattedTime = `${year}-${month}-${dt}`;
    return formattedTime;
  }

  const getToday = () => {
    const date = new Date();
    const futureDate = date.getDate();
    date.setDate(futureDate);
    const defaultValue = date.toLocaleDateString("en-US");
    return defaultValue;
  };

  const getYesterday = () => {
    const date = new Date();
    const pastDate = date.getDate() - 1;
    date.setDate(pastDate);
    const defaultValue = date.toLocaleDateString("en-US");
    return defaultValue;
  };

  const getNumberOfDays = (startDay, endDay) => {
    if (endDay === new Date()) {
      console.log("end", endDay);
      return;
    }
    if (startDay === undefined) {
      startDay = getToday();
    }
    if (endDay === undefined) {
      endDay = getYesterday();
    }
    const Date1 = new Date(startDay).getTime();
    const Date2 = new Date(endDay).getTime();
    const onDay = 1000 * 60 * 60 * 24;
    const diffreantTime = Math.round((Date1 - Date2) / onDay);
    return diffreantTime;
  };

  const Highest = foundCoins
    ? foundCoins.reduce(
        (max, coin) => (coin.high > max ? coin.high : max),
        foundCoins[0].high
      )
    : 0;

  const Lowest = foundCoins
    ? foundCoins.reduce(
        (min, coin) => (coin.low < min ? coin.low : min),
        foundCoins[0].low
      )
    : 0;

  const LowestPriceDate = () => {
    let LowResult = "";
    if (foundCoins) {
      const lowDate = foundCoins.filter((lowDate) => lowDate.low === Lowest);
      const lowDateFr = lowDate[0].time * 1000;
      LowResult = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(lowDateFr);
    }
    // console.log("Lowresult", LowResult);
    return String(LowResult);
  };
  LowestPriceDate();

  const HiestPriceDate = () => {
    let highResult = "";
    if (foundCoins) {
      const HighDate = foundCoins.filter(
        (highDate) => highDate.high === Highest
      );
      const HighDateFr = HighDate[0].time * 1000;
      highResult = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(HighDateFr);
    }
    // console.log("highResult", highResult);
    return String(highResult);
  };
  HiestPriceDate();

  const loWToHigh = (Invest, Lowest, Highest) => {
    const number = Invest / Lowest;
    const inHigh = number * Highest;
    const deffrencePrices = Highest - Lowest;
    const deffrencePricesPersent = (
      ((Highest - Lowest) / ((Highest + Lowest) / 2)) *
      100
    ).toLocaleString("en-US");

    return { inHigh, deffrencePrices, deffrencePricesPersent };
  };
  // console.log(loWToHigh(Invest, Lowest, Highest));

  const priceInEndDay =
    foundCoins && foundCoins[foundCoins.length - 1].high - foundCoins[0].low;

  const PageChangeHandler = (page) => {
    setCurrentPage(page);
  };

  const optionSelectHandler = (event) => {
    setPageSize(event.value);
    setCurrentPage(1);
  };

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...foundCoins].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setFoundCoins(sorted);
      setOrder("DSC");
      console.log(foundCoins);
    }
    if (order === "DSC") {
      const sorted = [...foundCoins].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setFoundCoins(sorted);
      setOrder("ASC");
      console.log(foundCoins);
    }
  };

  const allGains =
    foundCoins &&
    foundCoins
      ?.filter((coin) => coin !== null)
      .map(
        (coin) =>
          (Invest / (coin.low + (coin.low * LowMiss) / 100)) *
            (coin.high - (coin.high * HighMiss) / 100) -
          Invest
      );
  const allGainsSum =
    allGains &&
    allGains.reduce((acc, curr) => acc + curr, 0).toLocaleString("en-US");

  ////////////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    //https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=5&interval=daily
    // marketchart
    const search = () =>
      axios
        .get(
          `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${name}&tsym=USD&limit=${getNumberOfDays(
            startDay,
            endDay
          )}&api_key={${process.env.REACT_APP_API_KEY}} `
        )
        .then((res) => {
          if (res.status !== 200) return;
          // console.log(res.data);
          setIsItLoading(false);
          setFoundCoins(res.data.Data.Data);
          // coinCTX.setChartData(res.data.prices);
          // console.log(res.data.Data.Data)
        })
        .catch((error) => {
          setError(error);
          setIsItLoading(true);
          setFoundCoins([]);
          if (error.response) {
            /*
             * The request was made and the server responded with a
             * status code that falls out of the range of 2xx
             */
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            /*
             * The request was made but no response was received, `error.request`
             * is an instance of XMLHttpRequest in the browser and an instance
             * of http.ClientRequest in Node.js
             */
            console.log(error.request);
          } else {
            // Something happened in setting up the request and triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });

    search();
  }, [name, startDay, endDay]);

  if (isItLoading) {
    return (
      <Card
        sx={{
          color: "primary",
        }}
      >
        <div>
          Loading ...
          <br />
          <progress />
        </div>
      </Card>
    );
  } else if (foundCoins && !isItLoading) {
    return (
      <Card
        sx={{
          color: "primary",
        }}
      >
        <Head>
          <title>Fun Facts</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content={`Some Fun Fact About the Coins`} />
        </Head>

        <Grid
          columns={[1, 1, "2fr 1fr"]}
          gap={3}
          sx={{ maxHeight: ["100%", "100%", "22rem"] }}
        >
          <Box>
            <Grid
              columns={[1, 1, "1fr 1fr"]}
              gap={2}
              sx={{ maxHeight: ["100%", "100%", "22rem"] }}
            >
              <Box>Select Your Crypto Currency </Box>
              <Box>
                <select
                  className="MyDropdownsmall"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Select Coin"
                  value={name}
                  // options={coinNameList}
                >
                  {typeof coinCTX !== "undefined" ? (
                    coinCTX.data.map((coin) => (
                      <option key={coin.id} value={coin.symbol}>
                        {coin.symbol}
                      </option>
                    ))
                  ) : (
                    <option value="btc">btc</option>
                  )}
                </select>
              </Box>

              <Box> Select Start Time</Box>
              <Box>
                <DatePicker
                  className="MyDropdownsmall"
                  value={endDay || yesterday}
                  minDate={new Date(2017, 7, 1)}
                  maxDate={yesterday}
                  onChange={(date) => setEndDay(date)}
                  format="MM/dd/yyyy"
                />
              </Box>
              <Box>Select End Time </Box>
              <Box>
                <DatePicker
                  className="MyDropdownsmall"
                  value={startDay || new Date()}
                  minDate={new Date(2017, 7, 1)}
                  maxDate={new Date()}
                  onChange={(date) => {
                    setStartDay(date);
                  }}
                  format="MM/dd/yyyy"
                  // showYearDropdown
                  // scrollableMonthYearDropdown
                />
              </Box>
              <Box>Money you Wish to Invest at Start? $ </Box>
              <Box>
                <input
                  type="number"
                  className="MyDropdownsmall"
                  onChange={(e) => setInvest(e.target.value)}
                  value={Invest}
                  placeholder="$ invest"
                  min={0}
                />
              </Box>
              <Box> Maybe You Missed Lower price by %</Box>
              <Box>
                <input
                  type="number"
                  className="MyDropdownsmall"
                  onChange={(e) => setLowMiss(e.target.value)}
                  value={LowMiss}
                  placeholder="$ invest"
                  min={0}
                  max={100}
                />
              </Box>
              <Box>Maybe You Missed High price by % </Box>
              <Box>
                <input
                  type="number"
                  className="MyDropdownsmall"
                  onChange={(e) => setHighMiss(e.target.value)}
                  value={HighMiss}
                  placeholder="$ invest"
                  min={0}
                  max={100}
                />
              </Box>
            </Grid>
          </Box>
          <Box>
            <div>
              It does not necessarily mean that high prices always come after
              low prices but Imagine if you could and just for fun , check if
              you invest $&nbsp;
              <b>{Invest.toLocaleString("en-US")}</b> at the lowest price point.
              when ...
              <ul>
                <li>
                  - Highest <b>$ {Highest.toLocaleString("en-US")}</b>
                  &nbsp;at
                  <b>
                    &nbsp;
                    <HiestPriceDate />
                  </b>
                </li>
                <li>
                  - Lowest &nbsp;<b>$ {Lowest.toLocaleString("en-US")}</b>
                  &nbsp;at
                  <b>
                    &nbsp;
                    <LowestPriceDate />
                  </b>
                </li>
                <li>
                  - Difference possible to make:
                  <b>
                    $&nbsp;
                    {loWToHigh(
                      Invest,
                      Lowest,
                      Highest
                    ).deffrencePrices.toLocaleString("en-US")}
                  </b>
                  <b>
                    ~ %&nbsp;
                    {loWToHigh(
                      Invest,
                      Lowest,
                      Highest
                    ).deffrencePricesPersent.toLocaleString("en-US")}
                  </b>
                </li>
                <li>
                  - Difference on sort sequence of Table:
                  <b>
                    $&nbsp;
                    {priceInEndDay.toLocaleString("en-US")}
                  </b>
                </li>
                <li>
                  - Difference between Lowest & Highest with &nbsp;
                  <b>
                    $&nbsp;
                    {Invest.toLocaleString("en-US")}
                  </b>
                  &nbsp; at start comes: &nbsp;
                  <b>
                    $&nbsp;
                    {loWToHigh(Invest, Lowest, Highest).inHigh.toLocaleString(
                      "en-US"
                    )}
                  </b>
                  &nbsp; at the end.
                </li>
                <li>
                  - Gains if you buy everyday at the lowest price of the day and
                  sell at the highest price of the day. Regardless of this
                  priority , you could make <b>$ {allGainsSum}</b>
                </li>
              </ul>
              <br />
            </div>
          </Box>
        </Grid>

        {foundCoins ? (
          <div>
            <hr />
            <Image src={stock} alt="stock" width="50" height="50" />

            <Grid columns={[1, 2, 1, 5]} gap={1}>
              <Box
                sx={{
                  textAlign: "center",
                  fontWeight: "600",
                  color: "#000",
                  border: "none",
                }}
              >
                <input
                  type="text"
                  className="MyDropdown"
                  onChange={() => console.log()}
                  value={`${getNumberOfDays(startDay, endDay) + 1}  Days `}
                />
              </Box>
              <Box>
                <Select
                  className="MyDropdown"
                  options={paginationOptions}
                  onChange={optionSelectHandler}
                  defaultValue={{ value: 10, label: "10" }}
                />
              </Box>
              <Box
                sx={{
                  minWidth: "fit-content",
                  textAlign: "center",
                  fontWeight: "600",
                  color: "#000",
                  border: "none",
                }}
              >
                <Pagination
                  itemsCount={foundCoins.length}
                  pageSize={pageSize}
                  onPageChange={PageChangeHandler}
                  currentPage={currentPage}
                  style={{
                    width: "80%",
                  }}
                />
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  fontWeight: "600",
                  color: "green",
                  border: "none",
                }}
              >
                <section type="text" className="MyDropdown infobox">
                  <b>$ {Lowest.toLocaleString("en-US")}</b>
                </section>
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  fontWeight: "600",
                  color: "red",
                  border: "none",
                }}
              >
                <section type="text" className="MyDropdown infobox">
                  <b>$ {Highest.toLocaleString("en-US")}</b>
                </section>
              </Box>
            </Grid>
            <table className="userTable" rules="all">
              <thead>
                <tr>
                  <th
                    onClick={() => sorting("time")}
                    className="tg-yuap"
                    style={{ overflowWrap: "break-word", width: "10%" }}
                  >
                    Time
                  </th>
                  <th
                    onClick={() => sorting("low")}
                    className="tg-0pky"
                    style={{ overflowWrap: "break-word", width: "20%" }}
                  >
                    Low $
                  </th>
                  <th
                    onClick={() => sorting("high")}
                    className="tg-0pky"
                    style={{ overflowWrap: "break-word", width: "20%" }}
                  >
                    High $
                  </th>
                  <th
                    className="tg-0pky"
                    style={{ overflowWrap: "break-word", width: "10%" }}
                  >
                    Tolerance %
                  </th>
                  <th
                    className="tg-0pky"
                    style={{ overflowWrap: "break-word", width: "15%" }}
                  >
                    Low with {LowMiss}% Missed
                  </th>
                  <th
                    className="tg-0pky"
                    style={{ overflowWrap: "break-word", width: "15%" }}
                  >
                    High with {HighMiss}% Missed
                  </th>
                  <th
                    className="tg-0lax"
                    style={{ overflowWrap: "break-word", width: "15%" }}
                  >
                    Gain $
                  </th>
                </tr>
              </thead>
              <tbody>
                {foundCoins !== "undefined" &&
                  paginatedFilteredCoins
                    .filter((coin) => coin !== null)
                    .map((coin) => (
                      <tr key={coin.time}>
                        {/* Time */}
                        <td data-label="Time" className="tg-c3ow">
                          {new Date(coin.time * 1000).toLocaleDateString(
                            "en-US"
                          )}
                        </td>
                        {/* Low */}
                        <td
                          data-label="Low $"
                          className="tg-0pky"
                          style={{
                            color:
                              coin.low.toLocaleString("en-US") ==
                              Lowest.toLocaleString("en-US")
                                ? "red"
                                : "",
                          }}
                        >
                          $ {coin.low.toLocaleString("en-US")}
                        </td>
                        {/* High */}
                        <td
                          data-label="High $"
                          className="tg-0pky"
                          style={{
                            color:
                              coin.high.toLocaleString("en-US") ==
                              Highest.toLocaleString("en-US")
                                ? "green"
                                : "",
                          }}
                        >
                          $ {coin.high.toLocaleString("en-US")}
                        </td>
                        {/* Tolerance */}
                        <td data-label="Tolerance %" className="tg-0pky">
                          %
                          {(
                            ((coin.high - coin.low) /
                              ((coin.high + coin.low) / 2)) *
                            100
                          ).toLocaleString("en-US")}
                        </td>
                        {/* Low With 0% Missed */}
                        <td data-label="Low with Missed" className="tg-0pky">
                          %
                          {(
                            Invest /
                            (coin.low + (coin.low * LowMiss) / 100)
                          ).toLocaleString("en-US")}
                        </td>
                        {/* High With 0% Missed */}
                        <td data-label="High with Missed" className="tg-0pky">
                          $
                          {(
                            (Invest / (coin.low + (coin.low * LowMiss) / 100)) *
                            (coin.high - (coin.high * HighMiss) / 100)
                          ).toLocaleString("en-US")}
                        </td>
                        {/* gain */}
                        <td
                          data-label="Gain"
                          className="tg-0lax"
                          style={{
                            color:
                              (Invest /
                                (coin.low + (coin.low * LowMiss) / 100)) *
                                (coin.high - (coin.high * HighMiss) / 100) -
                                Invest >=
                              0
                                ? "green"
                                : "red",
                          }}
                        >
                          $
                          {(
                            (Invest / (coin.low + (coin.low * LowMiss) / 100)) *
                              (coin.high - (coin.high * HighMiss) / 100) -
                            Invest
                          ).toLocaleString("en-US")}
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h2>{error}</h2>
        )}

        <hr />
      </Card>
    );
  } else {
    return (
      <Card
        sx={{
          color: "primary",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          variant: "layout.root",
        }}
      >
        <div>Not Loading</div>
      </Card>
    );
  }
}

export default Crypto_fun_facts;

// npm install html-to-text
