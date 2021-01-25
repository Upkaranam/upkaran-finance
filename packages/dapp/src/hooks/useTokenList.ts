import { TokenList } from '@uniswap/token-lists';
import { useCallback, useState, useEffect, useContext } from 'react';
import { getTokenList } from '../utils/getTokenList';
import { resolveENSContentHash } from '../utils/resolveENSContentHash';
import { ethers } from 'ethers';
import { Web3Context } from '../contexts/Web3Context';
import { CONFIG } from '../config';

export const useTokenList = (listUrl: string): TokenList | undefined => {
  const { chainId, provider, isSupportedNetwork } = useContext(Web3Context);
  const [tokenList, setTokenList] = useState<TokenList | undefined>();
  const ensResolver = useCallback(
    (ensName: string) => {
      if (!provider || !isSupportedNetwork || chainId !== 1) {
        const ethersProvider = new ethers.providers.JsonRpcProvider(
          `https://mainnet.infura.io/v3/${CONFIG.infuraId}`,
        );
        return resolveENSContentHash(ensName, ethersProvider);
      }
      return resolveENSContentHash(ensName, provider);
    },
    [chainId, provider, isSupportedNetwork],
  );
  const fetchTokenList = useCallback(async () => {
    getTokenList(listUrl, ensResolver)
      .then(setTokenList)
      .catch(tokenListError => {
        //eslint-disable-next-line
        console.error({ tokenListError });
      });
  }, [listUrl, ensResolver]);

  useEffect(() => {
    fetchTokenList();
  }, [fetchTokenList]);

  return tokenList;
};
