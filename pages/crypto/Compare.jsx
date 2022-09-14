/** @jsxImportSource theme-ui */
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { split } from "lodash";
import Chart from "../../Components/Chart/News";
import axios from "axios";
import { Card, Grid, Box, Flex } from "theme-ui";
import useCoins from "../../lib/useCoins";
import stock from "../../public/Images/stock.png";
import stock2 from "../../public/Images/stock2.png";
import versus from "../../public/Images/pngaaa.com-719740.png";

function Compare() {
  const [foundCoins, setFoundCoins] = useState([]);
  const [foundCoins2, setFoundCoins2] = useState([]);
  const [name, setName] = useState("cardano");
  const [name2, setName2] = useState("solana");
  const [error, setError] = useState();
  const [isItLoading, setIsItLoading] = useState(true);
  const [isItLoadingCoinDetail, setIsItLoadingCoinDetail] = useState(true);
  const [coinAllInfo, setCoinAllInfo] = useState([]);
  const [coinAllInfo2, setCoinAllInfo2] = useState([]);
  const [timeLabale, settimeLabale] = useState("");

  ////////////////////////////////////////////////Coin List/////////////////////////////////////////
  const [coinsList, setCoinsList] = useState([]);
  useEffect(() => {
    const GetCoinsList = async () => {
      const featuredCoins = await useCoins();
      setCoinsList(featuredCoins.data);
    };
    GetCoinsList();
  }, []);

  ////////////////////////////////////////////////duration Cotrol maker/////////////////////////////////////////
  const [startTime, setStartTime] = useState(
    (new Date(Date.now()).getTime() / 1000 - 86400).toFixed(0)
  );
  const [endTime] = useState(
    (new Date(Date.now()).getTime() / 1000).toFixed(0)
  );
  const timeController = [
    { value: new Date().setHours(new Date().getHours() - 4), label: "4H" },
    { value: new Date().setDate(new Date().getDate() - 1), label: "1D" },
    { value: new Date().setDate(new Date().getDate() - 7), label: "7D" },
    { value: new Date().setMonth(new Date().getMonth() - 1), label: "1M" },
    { value: new Date().setMonth(new Date().getMonth() - 3), label: "3M" },
    {
      value: new Date().setFullYear(new Date().getFullYear() - 1),
      label: "1Y",
    },
    {
      value: new Date().setFullYear(new Date().getFullYear() - 5),
      label: "5Y",
    },
  ];
  const setStarthandler = (event) => {
    const alldata = event.target.value;
    const alldatavalue = split(alldata, ",")[0];
    const alldataLabel = split(alldata, ",")[1];

    console.log(alldatavalue);
    console.log(alldataLabel);
    setStartTime(Math.round(+alldatavalue / 1000));
    settimeLabale(alldataLabel);
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    const getCoinNews = () =>
      axios
        .get(`https://api.coingecko.com/api/v3/coins/${name}`)
        .then((res) => {
          if (res.status !== 200) return;
          setIsItLoadingCoinDetail(false);
          setCoinAllInfo(res.data);

          // console.log(res.data);
          // console.log(res.data.description.en);
        })
        .catch((error) => {
          setError(error);
          setIsItLoadingCoinDetail(true);
          setCoinAllInfo([]);
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
    //////////////////////////////////////////////////////////
    const search = () =>
      axios
        .get(
          `https://api.coingecko.com/api/v3/coins/${name}/market_chart/range?vs_currency=usd&from=${startTime}&to=${endTime}`
        )
        .then((res) => {
          if (res.status !== 200) return;
          // console.log(res.status);
          setIsItLoading(false);
          setFoundCoins(res.data.prices);
          // coinCTX.setChartData(res.data.prices);
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

    const getCoinNews2 = () =>
      axios
        .get(`https://api.coingecko.com/api/v3/coins/${name2}`)
        .then((res) => {
          if (res.status !== 200) return;
          setIsItLoadingCoinDetail(false);
          setCoinAllInfo2(res.data);

          // console.log(res.data);
          // console.log(res.data.description.en);
        })
        .catch((error) => {
          setError(error);
          setIsItLoadingCoinDetail(true);
          setCoinAllInfo2([]);
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
    //////////////////////////////////////////////////////////
    const search2 = () =>
      axios
        .get(
          `https://api.coingecko.com/api/v3/coins/${name2}/market_chart/range?vs_currency=usd&from=${startTime}&to=${endTime}`
        )
        .then((res) => {
          if (res.status !== 200) return;
          // console.log(res.status);
          setIsItLoading(false);
          setFoundCoins2(res.data.prices);
          // coinCTX.setChartData2(res.data.prices);
        })
        .catch((error) => {
          setError(error);
          setIsItLoading(true);
          setFoundCoins2([]);
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

    getCoinNews();
    search();
    getCoinNews2();
    search2();
  }, [name, name2, startTime, endTime]);

  const Progress = ({ done, coinNumber }) => (
    <div className="MyProgress" style={{ overflow: "hidden" }}>
      <div
        className="progress-done"
        style={{ opacity: 1, width: `${done}%`, overflow: "hidden" }}
      >
        <img
          style={{
            all: "initial",
            margin: "0 0 0 0rem",
            left: "0",
            position: "absolute",
            opacity: ".5",
            aspectRatio: "1/1",
          }}
          src={coinNumber}
          alt={coinNumber}
        />
        <p>{done}%</p>
      </div>
    </div>
  );

  const Firstcoinimage = () => (
    <img
      style={{
        all: "initial",
        margin: "0 1rem 0 0rem",
        opacity: ".5",
        left: "0",
        position: "absolute",
        aspectRatio: "1/1",
      }}
      src={coinAllInfo.image.small ? coinAllInfo.image.small : "#"}
      alt="click to open Google Trend"
    />
  );
  const Secondcoinimage = () => (
    <img
      style={{
        all: "initial",
        margin: "0 1rem 0 0rem",
        opacity: ".5",
        left: "0",
        position: "absolute",
        aspectRatio: "1/1",
      }}
      src={coinAllInfo2.image.small ? coinAllInfo2.image.small : "#"}
      alt="click to open Google Trend"
    />
  );

  if (isItLoading) {
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
        <div>
          Loading ...
          <br />
          <progress />
        </div>
      </Card>
    );
  } else if (isItLoadingCoinDetail) {
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
        <div>
          Loading ...
          <br />
          <progress />
        </div>
      </Card>
    );
  } else if (
    foundCoins.length > 0 &&
    !isItLoading &&
    !isItLoadingCoinDetail &&
    Object.keys(coinAllInfo).length > 0 &&
    Object.keys(coinAllInfo2).length > 0
  ) {
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
        <Head>
          <title>Compare two crypto Currency</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content={`Every Thing About The ${coinAllInfo2.id} vs ${coinAllInfo.id} , and more`}
          />
        </Head>

        <Grid
          columns={[1, 1, "2fr 1fr"]}
          gap={2}
          sx={{ maxHeight: ["100%", "100%", "22rem"] }}
        >
          <Box>
            {foundCoins && foundCoins2 && (
              <Chart data={foundCoins} data2={foundCoins2} />
            )}
          </Box>
          <Box>
            <select
              className="MyDropdown"
              onChange={(e) => setName(e.target.value)}
              placeholder="Select Coin"
              value={name}
              // options={coinNameList}
            >
              {typeof coinsList !== "undefined" ? (
                coinsList.map((coin) => (
                  <option key={coin.id} value={coin.id}>
                    {coin.symbol}
                  </option>
                ))
              ) : (
                <option value="btc">btc</option>
              )}
            </select>

            <select
              className="MyDropdown"
              onChange={(e) => setName2(e.target.value)}
              placeholder="Select Coin"
              value={name2}
            >
              {typeof coinsList !== "undefined" ? (
                coinsList.map((coin) => (
                  <option key={coin.id} value={coin.id}>
                    {coin.symbol}
                  </option>
                ))
              ) : (
                <option value="btc">btc</option>
              )}
            </select>

            <select
              className="MyDropdown"
              onChange={(e) => setStarthandler(e)}
              placeholder="Select Duration ..."
            >
              <>
                <option value={Object.values(timeController[0])}>4H</option>
                <option value={Object.values(timeController[1])}>1D</option>
                <option value={Object.values(timeController[2])}>7D</option>
                <option value={Object.values(timeController[3])}>1M</option>
                <option value={Object.values(timeController[4])}>3M</option>
                <option value={Object.values(timeController[5])}>1Y</option>
                <option value={Object.values(timeController[6])}>5Y</option>
              </>
            </select>

            <div className="toptablestatus" gap={2}>
              <Image
                src="https://alternative.me/crypto/fear-and-greed-index.png"
                alt="Latest Crypto Fear & Greed Index"
                sx={{
                  width: "65%",
                  borderRadius: ".6rem",
                  filter: "hue-rotate(180deg)",
                  border: "4px rgb(252, 125, 22) solid",
                }}
                height="200"
                width="220"
              />
            </div>
          </Box>
        </Grid>

        <hr />

        <Flex>
          <Box p={2} sx={{ flex: "1 1 1 auto" }}>
            <Image
              src={coinAllInfo.image.small ? coinAllInfo.image.small : "#"}
              alt="click to open Google Trend"
              width="50"
              height="50"
            />
          </Box>
          <Box p={2}>
            <Image src={versus} alt="versus" width="50" height="50" />
          </Box>

          <Box p={2}>
            <Image
              src={coinAllInfo2.image.small ? coinAllInfo2.image.small : "#"}
              alt="click to open Google Trend"
              width="50"
              height="50"
            />
          </Box>
        </Flex>

        <Grid>
          <hr />

          <Grid
            columns={[1, 1, "2fr 1fr"]}
            gap={2}
            sx={{ maxHeight: ["100%", "100%", "22rem"] }}
          >
            <Box>
              <div
                className="emptybigcontainer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 1,
                  duration: 1,
                }}
              >
                <Firstcoinimage />
                Market Cap : $&nbsp;
                {coinAllInfo.market_data.market_cap.usd
                  ? coinAllInfo.market_data.market_cap.usd.toLocaleString(
                      "en-US"
                    )
                  : ""}
                <br />
                Price : $&nbsp;
                {coinAllInfo.market_data.current_price.usd
                  ? coinAllInfo.market_data.current_price.usd.toLocaleString(
                      "en-US"
                    )
                  : ""}
              </div>

              <div
                className="emptybigcontainer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 3,
                  duration: 1,
                }}
              >
                <Secondcoinimage />
                Market Cap : $&nbsp;
                {coinAllInfo2.market_data.market_cap.usd
                  ? coinAllInfo2.market_data.market_cap.usd.toLocaleString(
                      "en-US"
                    )
                  : ""}
                <br />
                Price : $&nbsp;
                {coinAllInfo2.market_data.current_price.usd
                  ? coinAllInfo2.market_data.current_price.usd.toLocaleString(
                      "en-US"
                    )
                  : ""}
              </div>

              <div
                className="emptybigcontainer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 5,
                  duration: 1,
                }}
                style={{ paddingLeft: "10%" }}
              >
                - Market Cap of the {coinAllInfo2.id} is &nbsp;
                {coinAllInfo.market_data.market_cap.usd
                  ? (
                      (coinAllInfo2.market_data.market_cap.usd /
                        coinAllInfo.market_data.market_cap.usd) *
                      100
                    ).toFixed(2)
                  : ""}
                % of the {coinAllInfo.id}.
                <br />- {coinAllInfo.id} with the market cap of&nbsp;
                {coinAllInfo2.id}
                &nbsp;should be roughly $&nbsp;
                {coinAllInfo.market_data.market_cap.usd
                  ? (
                      coinAllInfo2.market_data.market_cap.usd /
                      (coinAllInfo.market_data.market_cap.usd /
                        coinAllInfo.market_data.current_price.usd)
                    ).toLocaleString("en-US")
                  : ""}{" "}
                💵
                <br />- {coinAllInfo2.id} with the market cap of&nbsp;
                {coinAllInfo.id}
                &nbsp;should be roughly $&nbsp;
                {coinAllInfo.market_data.market_cap.usd
                  ? (
                      coinAllInfo.market_data.market_cap.usd /
                      (coinAllInfo2.market_data.market_cap.usd /
                        coinAllInfo2.market_data.current_price.usd)
                    ).toLocaleString("en-US")
                  : ""}{" "}
                💵
              </div>
            </Box>

            <Box>
              <section className="infoandpichrt">
                <div
                  style={{
                    backgroundImage: `conic-gradient(rgba(63,63,63,1)  ${
                      coinAllInfo.market_data.market_cap.usd
                        ? (
                            (coinAllInfo2.market_data.market_cap.usd /
                              coinAllInfo.market_data.market_cap.usd) *
                            100
                          ).toFixed(2)
                        : ""
                    }%, gray 0%, rgba(63, 63, 63,0.6))`,
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "0px solid black",
                      backgroundColor: "transparent",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    {coinAllInfo.market_data.market_cap.usd
                      ? (
                          (coinAllInfo2.market_data.market_cap.usd /
                            coinAllInfo.market_data.market_cap.usd) *
                          100
                        ).toFixed(2)
                      : ""}
                    %
                  </span>
                </div>
              </section>
            </Box>
          </Grid>

          <hr />
          <Grid gap={2} columns={[1, 2, 2]} sx={{ mt: 20 }}>
            <Box className="mycard">
              <div className="mycardImage">
                <Image src={stock} alt="stock Icon" />
              </div>
              public interest stats
              <div
                className="emptycontainer"
                style={{
                  opacity: 1,
                  width: "100%",
                  maxWidth: "100%",
                  textAlign: "center",
                }}
              >
                <Firstcoinimage />
                <p
                  style={{
                    position: "absolute",
                    left: "5rem",
                    top: ".2rem",
                  }}
                >
                  {coinAllInfo.public_interest_stats.alexa_rank
                    ? coinAllInfo.public_interest_stats.alexa_rank
                    : ""}
                </p>
              </div>
              <div
                className="emptycontainer"
                style={{
                  opacity: 1,
                  width: "100%",
                  maxWidth: "100%",
                  textAlign: "center",
                }}
              >
                <Secondcoinimage />
                <p
                  style={{
                    position: "absolute",
                    left: "5rem",
                    top: ".2rem",
                  }}
                >
                  {" "}
                  {coinAllInfo2.public_interest_stats.alexa_rank
                    ? coinAllInfo2.public_interest_stats.alexa_rank
                    : ""}
                </p>
              </div>
              {/* ////////////////////// */}
              sentiment votes down
              <Progress
                coinNumber={coinAllInfo.image.small}
                done={
                  coinAllInfo.sentiment_votes_down_percentage
                    ? coinAllInfo.sentiment_votes_down_percentage
                    : ""
                }
              />
              <Progress
                coinNumber={coinAllInfo2.image.small}
                done={
                  coinAllInfo2.sentiment_votes_down_percentage
                    ? coinAllInfo2.sentiment_votes_down_percentage
                    : ""
                }
              />
              {/* ////////////////////// */}
              sentiment votes up
              <Progress
                coinNumber={coinAllInfo.image.small}
                done={
                  coinAllInfo.sentiment_votes_up_percentage
                    ? coinAllInfo.sentiment_votes_up_percentage
                    : ""
                }
              />
              <Progress
                coinNumber={coinAllInfo2.image.small}
                done={
                  coinAllInfo2.sentiment_votes_up_percentage
                    ? coinAllInfo2.sentiment_votes_up_percentage
                    : ""
                }
              />
            </Box>

            <Box className="mycard">
              <div className="mycardImage">
                <Image src={stock2} alt="stock icon" />
              </div>
              community score
              <Progress
                coinNumber={coinAllInfo.image.small}
                done={
                  coinAllInfo.community_score ? coinAllInfo.community_score : ""
                }
              />
              <Progress
                coinNumber={coinAllInfo2.image.small}
                done={
                  coinAllInfo2.community_score
                    ? coinAllInfo2.community_score
                    : ""
                }
              />
              {/* ////////////////////// */}
              developer score
              <Progress
                coinNumber={coinAllInfo.image.small}
                done={
                  coinAllInfo.developer_score ? coinAllInfo.developer_score : ""
                }
              />
              <Progress
                coinNumber={coinAllInfo2.image.small}
                done={
                  coinAllInfo2.developer_score
                    ? coinAllInfo2.developer_score
                    : ""
                }
              />
              {/* ////////////////////// */}
              liquidity score
              <Progress
                coinNumber={coinAllInfo.image.small}
                done={
                  coinAllInfo.liquidity_score ? coinAllInfo.liquidity_score : ""
                }
              />
              <Progress
                coinNumber={coinAllInfo2.image.small}
                done={
                  coinAllInfo2.liquidity_score
                    ? coinAllInfo2.liquidity_score
                    : ""
                }
              />
            </Box>
          </Grid>
        </Grid>
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
        <div className={`$''tableContainer}`}>Not Loading</div>
      </Card>
    );
  }
}

export default Compare;
