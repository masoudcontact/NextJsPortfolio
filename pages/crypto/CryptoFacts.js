import Facts from "../../Components/Crypto/Facts";
import UseCoins from "../../lib/useCoins";

export const getServerSideProps = async () => {
  const coins = await UseCoins();
  return {
    props: {
      coins,
    },
  };
};

const CryptoFacts = ({ coins }) => {
  return (
    <div>
      <Facts coins={coins} />
    </div>
  );
};

export default CryptoFacts;
