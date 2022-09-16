import { getCoinDetail } from "../../lib/useCoins";
import { Spinner } from "theme-ui";
import Details from "../../Components/Crypto/Details";

export async function getServerSideProps(context) {
  const { params } = context;
  const coinId = params.cid;
  const res = await getCoinDetail(coinId);
  if (!res) {
    return {
      props: {
        notFound: true,
      },
    };
  }
  return {
    props: {
      coin: res.data,
    },
  };
}

const CoinDetails = ({ coin }) => {
  // console.log(coin);
  if (!coin) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }
  return <Details coin={coin} />;
};

export default CoinDetails;

// with static

// export async function getStaticProps(context) {
//   const { params } = context;
//   const coinId = params.cid;
//   const res = await getCoinDetail(coinId);
//   if (!res) {
//     return {
//       props: {
//         notFound: true,
//       },
//     };
//   }
//   return {
//     props: {
//       coin: res.data,
//     },
//   };
// }

// export async function getStaticPaths() {
// //if its array then we can use map
//   // const ids = coin.map((coin) => coin.id);
//   // const pathparams = ids.map((id) => ({ params: { cid: id } }));

//   return {
//     paths: [{ params: { cid: "bitcoin" } }, { params: { cid: "ethereum" } }],
//     fallback: true,
//   };
// }
