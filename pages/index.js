import { useAddress, useMetamask } from '@thirdweb-dev/react';
import Main from '../components/Home';

const style = {
  wrapper: 'flex h-screen items-center justify-center',
  connectWalletButton: 'rounded-lg border border-black px-10 px-5 transition-all hover:bg-black hover:text-white', // Removed space after "hover"
};

export default function Home() {
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  console.log(address);

  const Auth = () => {
    return (
      <div className={style.wrapper}>
        <button onClick={connectWithMetamask} className={style.connectWalletButton}>
          Connect Metamask
        </button>
      </div>
    );
  };

  return <>{address ? <Main /> : <Auth />}</>; // Added "<>" around <Auth />
}
