import { ExternalProvider, Web3Provider } from '@ethersproject/providers';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { CONFIG } from 'config';
import { ethers } from 'ethers';
import React, { createContext, useCallback, useEffect, useState } from 'react';
import Web3 from 'web3';
import Web3Modal from 'web3modal';

type Web3State = {
  provider: Web3Provider | undefined;
  chainId: number | undefined;
  account: string;
  isSupportedNetwork: boolean;
};

type Web3ContextType = {
  loading: boolean;
  connectWeb3: () => Promise<void>;
  disconnect: () => void;
} & Web3State;

const defaultWeb3State = {
  provider: undefined,
  account: '',
  isSupportedNetwork: true,
  chainId: undefined,
};

export const Web3Context = createContext<Web3ContextType>({
  loading: false,
  connectWeb3: async () => {},
  disconnect: () => undefined,
  ...defaultWeb3State,
});

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: CONFIG.infuraId,
    },
  },
};

const web3Modal: Web3Modal = new Web3Modal({
  cacheProvider: true,
  providerOptions,
});

export const Web3ContextProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [web3State, setWeb3State] = useState<Web3State>(defaultWeb3State);
  const { chainId, provider, account, isSupportedNetwork } = web3State;

  const setWeb3Provider = async (web3Provider: Web3, updateAccount = false) => {
    if (web3Provider) {
      const ethersProvider = new ethers.providers.Web3Provider(
        web3Provider.currentProvider as ExternalProvider,
      );

      const network = await ethersProvider.getNetwork();

      const isValidNetwork = network.chainId === CONFIG.network.chainId;
      if (updateAccount) {
        const signer = ethersProvider.getSigner();
        const gotAccount = await signer.getAddress();
        setWeb3State(_provider => ({
          ..._provider,
          provider: ethersProvider,
          chainId: network.chainId,
          account: gotAccount,
          isSupportedNetwork: isValidNetwork,
        }));
      } else {
        setWeb3State(_provider => ({
          ..._provider,
          provider: ethersProvider,
          chainId: network.chainId,
          isSupportedNetwork: isValidNetwork,
        }));
      }
    }
  };

  const connectWeb3 = useCallback(async () => {
    try {
      setLoading(true);
      const modalProvider = await web3Modal.connect();

      await setWeb3Provider(new Web3(modalProvider), true);

      // Subscribe to accounts change
      modalProvider.on('accountsChanged', (accounts: Array<string>) => {
        setWeb3State(_provider => ({
          ..._provider,
          account: accounts[0],
        }));
      });

      // Subscribe to chainId change
      modalProvider.on('chainChanged', () => {
        setWeb3Provider(new Web3(modalProvider));
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log({ web3ModalError: error });
    }
    setLoading(false);
  }, []);

  const disconnect = useCallback(async () => {
    web3Modal.clearCachedProvider();
    setWeb3State(defaultWeb3State);
  }, []);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.autoRefreshOnNetworkChange = false;
    }
    if (web3Modal.cachedProvider) {
      connectWeb3().catch(error => {
        // eslint-disable-next-line no-console
        console.error({ web3ModalError: error });
      });
    } else {
      setLoading(false);
    }
  }, [connectWeb3]);

  return (
    <Web3Context.Provider
      value={{
        loading,
        provider,
        connectWeb3,
        disconnect,
        account,
        chainId,
        isSupportedNetwork,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};
