import React, {useEffect, useState} from 'react';
import './App.css';
import twitterLogo from './assets/images/twitter-logo.svg';

// Constants
const TWITTER_HANDLE = 'HARUKI05758694';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

/**
 * APPコンポーネント
 */
const App = () => {
  // ステート変数
  const [walletAddress, setWalletAddress] = useState(null);

  /**
   * ウォレットの接続状態を確認するメソッド
   */
  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana && solana.isPhantom) {
        console.log("Phantom wallet found!");
        const response = await solana.connect({ onlyIfTrusted: true });
        console.log("Connected with Public Key:", response.publicKey.toString());
        // ステート変数を更新
        setWalletAddress(response.publicKey.toString());
      } else {
        alert("Solana object not found! Get a Phantom Wallet 👻");
      }
    } catch (error) {
      console.error(error);
    }
  };


  /**
   * 「Connect to Wallet」ボタンを押したときの処理
   */
  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      // solanaオブジェクトに接続する。
      const response = await solana.connect();
      console.log("Connected with Public Key:", response.publicKey.toString());
      // ステート変数を更新
      setWalletAddress(response.publicKey.toString());
    }
  };

  /**
   * renderNotConnectedContainerコンポーネント
   */
  const renderNotConnectedContainer = () => (
    <button
      className="cta-button connect-wallet-button"
      onClick={connectWallet}
    >
      Connect to Wallet
    </button>
  );

  // 副作用フック
  useEffect(() => {
    // onLoadメソッド
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    // ロードされたタイミングで呼び出す。
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);


  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">🍭 Candy Drop</p>
          <p className="sub-text">NFT drop machine with fair mint</p>
          {!walletAddress && renderNotConnectedContainer()}
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
