export const CONFIG =
  process.env.REACT_APP_NETWORK === 'mainnet'
    ? {
        network: { chainId: 1, name: 'ETH Mainnet' },
        infuraId: process.env.REACT_APP_INFURA_ID,
        boxEndpoint: 'https://ipfs.3box.io',
        ipfsEndpoint: 'https://ipfs.infura.io',
        explorerEndpoint: 'https://etherscan.io',
      }
    : {
        network: { chainId: 42, name: 'Kovan Testnet' },
        infuraId: process.env.REACT_APP_INFURA_ID,
        boxEndpoint: 'https://ipfs.3box.io',
        ipfsEndpoint: 'https://ipfs.infura.io',
        explorerEndpoint: 'https://kovan.etherscan.io',
      };
