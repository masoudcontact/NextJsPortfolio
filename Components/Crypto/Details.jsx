/** @jsxImportSource theme-ui */
import { useState, useEffect } from "react";
import HttpGetter from "../../lib/HttpGetter";
import Image from "next/image";
import useCoins, { searchForPrices } from "../../lib/useCoins";
import { useRouter } from "next/router";
import { split } from "lodash";
import Chart from "../Chart/News";
import Head from "next/head";
import parse from "html-react-parser";
import { Card, Grid, Box } from "theme-ui";
import stock from "../../public/Images/stock.png";
import stock2 from "../../public/Images/stock2.png";
import stock3 from "../../public/Images/stock3.png";
import stock4 from "../../public/Images/stock4.png";
import GoogleTrends from "./GoogleTrends";

const Details = ({ coin }) => {
  const router = useRouter();
  //-----------------------------------------------------Coin List
  const [coinsList, setCoinsList] = useState([]);
  const [name, setName] = useState(coin ? coin : "bitcoin");
  useEffect(() => {
    const GetCoinsList = async () => {
      const featuredCoins = await useCoins();
      setCoinsList(featuredCoins.data);
    };
    GetCoinsList();
  }, []);
  const SelectCoin = (e) => {
    const CoinName = coinsList.find((coin) => coin.symbol === e.target.value);
    setName(CoinName);
    // console.log(CoinName.id);
    router.push(`/crypto/${CoinName.id}`);
  };
  //-----------------------------------------------------Time Manage
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
    setStartTime(Math.round(+alldatavalue / 1000));
  };
  //-----------------------------------------------------Chart Data Provider
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    const GetChartData = async () => {
      const Data = await searchForPrices({
        name: name.id,
        startTime,
        endTime,
      });
      if (Data) {
        // console.log(Data.data.prices);
        setChartData(Data.data.prices);
      }
    };
    GetChartData();
  }, [name, startTime, endTime]);

  //-----------------------------------------------------Progress Bar
  const Progress = ({ done }) => (
    <div className="MyProgress">
      <div className="progress-done" style={{ opacity: 1, width: `${done}%` }}>
        <p>{done}%</p>
      </div>
    </div>
  );

  //-----------------------------------------------------Google trend

  const [trends, setTrends] = useState([]);
  useEffect(() => {
    const TrendChart = ({ coin }) => {
      return (
        <div id="widget">
          Interest over time for {coin}
          <GoogleTrends
            type="TIMESERIES"
            keyword={coin}
            url="https://ssl.gstatic.com/trends_nrtr/2051_RC11/embed_loader.js"
          />
          <GoogleTrends
            type="GEO_MAP"
            keyword={coin}
            url="https://ssl.gstatic.com/trends_nrtr/2051_RC11/embed_loader.js"
          />
        </div>
      );
    };
    setTrends(<TrendChart coin={coin.id} />);
  }, [coin]);

  ////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <Card
      sx={{
        color: "primary",
      }}
    >
      <Head>
        <title>About The {coin.id}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={`Every Thing About The ${coin.id} , and more`}
        />
      </Head>
      <Grid
        columns={[1, 1, "2fr 1fr"]}
        gap={2}
        sx={{ maxHeight: ["100%", "100%", "22rem"] }}
      >
        <Box
          sx={{
            marginLeft: "-2rem",
            overflow: "scroll",
          }}
        >
          {chartData && <Chart data={chartData} data2={[]} />}
        </Box>

        <Box>
          <select
            className="MyDropdown"
            onChange={(e) => SelectCoin(e)}
            placeholder="Select Coin"
            // value={coin.id}
          >
            {typeof coinsList !== "undefined" ? (
              coinsList
                .map((coin) => coin.symbol)
                .map((symbol) => (
                  <option key={symbol} value={symbol}>
                    {symbol}
                  </option>
                ))
            ) : (
              <option value={coin.id}>{coin.id}</option>
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
          <Box>
            <HttpGetter coin={coin.links} />
          </Box>
        </Box>
      </Grid>

      <Grid>
        <Box>
          <hr />
          <span title="Click to open Google Trend">
            <a
              href={`https://trends.google.com/trends/explore?q=${coin.id}&geo=US`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={coin.image.small ? coin.image.small : "#"}
                alt="click to open Google Trend"
              />
            </a>
          </span>
          <details style={{ color: "#CCC" }}>
            <summary className="infotext">
              {coin.links.blockchain_site
                ? HttpGetter(coin.links).length
                : null}
              - Google Trend Chart
            </summary>

            {trends}

            <hr />
          </details>
        </Box>

        <hr />
        {/* ////////////////////////////////////////first line of detail///////////////////////////////////////// */}
        <Grid gap={2} columns={[1, 2, 4]} sx={{ mt: 20 }}>
          <Box className="mycard">
            <div className="mycardImage">
              <Image src={stock} />
            </div>
            community score
            <Progress done={coin.community_score ? coin.community_score : ""} />
            developer score
            <Progress done={coin.developer_score ? coin.developer_score : ""} />
            liquidity score
            <Progress done={coin.liquidity_score ? coin.liquidity_score : ""} />
          </Box>
          <Box className="mycard">
            <div className="mycardImage">
              <Image src={stock2} />
            </div>
            genesis date
            <div className="emptycontainer">
              {coin.genesis_date ? coin.genesis_date : ""}
            </div>
            hashing algorithm
            <div className="emptycontainer">
              {coin.hashing_algorithm ? coin.hashing_algorithm : ""}
            </div>
            block time in minutes
            <div className="emptycontainer">
              {coin.block_time_in_minutes ? coin.block_time_in_minutes : ""}
            </div>
          </Box>
          <Box className="mycard">
            <div className="mycardImage">
              <Image src={stock3} />
            </div>
            categories - {coin.categories.length}
            <div className="emptycontainer">
              {coin.categories.length > 1 ? (
                <ul>
                  {coin.categories.map((coincategory, index) => (
                    <li key={index}> {coincategory}</li>
                  ))}
                </ul>
              ) : (
                coin.categories
              )}
            </div>
            official forum
            <div className="emptycontainer">
              {coin.links.official_forum_url
                ? coin.links.official_forum_url
                : ""}
            </div>
            twitter
            <div className="emptycontainer">
              {coin.links.twitter_screen_name
                ? coin.links.twitter_screen_name
                : ""}
            </div>
          </Box>
          <Box className="mycard">
            <div className="mycardImage">
              <Image src={stock4} />
            </div>
            public interest stats
            <div className="emptycontainer">
              <p
                style={{
                  position: "absolute",
                  left: "5rem",
                  top: ".2rem",
                }}
              >
                {coin.public_interest_stats.alexa_rank
                  ? coin.public_interest_stats.alexa_rank
                  : ""}
              </p>
            </div>
            sentiment votes down
            <Progress
              done={
                coin.sentiment_votes_down_percentage
                  ? coin.sentiment_votes_down_percentage
                  : ""
              }
            />
            sentiment votes up
            <Progress
              done={
                coin.sentiment_votes_up_percentage
                  ? coin.sentiment_votes_up_percentage
                  : ""
              }
            />
          </Box>
        </Grid>

        <details>
          <summary className="infotext">More info {coin.id}</summary>
          {parse(`${coin.description.en ? coin.description.en : ""}`)}
        </details>
      </Grid>
    </Card>
  );
};

export default Details;
