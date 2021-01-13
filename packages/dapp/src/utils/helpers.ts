import { getAddress } from '@ethersproject/address';
import { BigNumber, utils } from 'ethers';

export const formatValue = (
  numberInWei: BigNumber,
  decimals = 18,
  p = 1,
): string => {
  const value = Number(utils.formatUnits(numberInWei, decimals));
  const rounded = Math.round(value * 10 ** p) / 10 ** p;
  return rounded.toFixed(p);
};

export const copyToClipboard = (value: string): void => {
  const tempInput = document.createElement('input');
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
};

// returns the checksummed address if the address is valid, otherwise returns false
export const isAddress = (value: string): string | false => {
  try {
    return getAddress(value).toLowerCase();
  } catch {
    return false;
  }
};
