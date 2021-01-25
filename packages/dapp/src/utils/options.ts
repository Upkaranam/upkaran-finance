import { Leverage } from '../components/Aave/Leverage';
import { Save } from '../components/Aave/Save';
import { DebtSwap } from '../components/Aave/DebtSwap';
import { CollateralSwap } from '../components/Aave/CollateralSwap';
import { DepositBorrow } from '../components/Aave/DepositBorrow';
import { PaybackWithdraw } from '../components/Aave/PaybackWithdraw';

export enum Application {
  AAVE,
  COMPOUND,
  MAKER,
}

export const tokenListUrls: {
  [key in Application]: string;
} = {
  [Application.AAVE]: 'tokenlist.aave.eth',
  [Application.COMPOUND]:
    'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json',
  [Application.MAKER]: 'tokenlist.aave.eth',
};

type Strategy = {
  title: string;
  description: string;
  component: React.FC;
};

export const strategies: {
  [key in Application]: Array<Strategy>;
} = {
  [Application.AAVE]: [
    {
      title: 'Leverage',
      description:
        'Go Long on Collateral & earn benefit when Collateral surges',
      component: Leverage,
    },
    {
      title: 'Save',
      description:
        'Swap Collateral into Debt and Payback making position less risky',
      component: Save,
    },
    {
      title: 'Collateral Swap',
      description: 'Switch your collateral & earn $',
      component: CollateralSwap,
    },
    {
      title: 'Debt Swap',
      description: 'Switch your debt & earn $',
      component: DebtSwap,
    },
    {
      title: 'Deposit & Borrow',
      description: 'Deposit collateral & borrow asset in a single txn',
      component: DepositBorrow,
    },
    {
      title: 'Payback & Withdraw',
      description: 'Payback debt & withdraw collateral in a single txn',
      component: PaybackWithdraw,
    },
  ],
  [Application.COMPOUND]: [],
  [Application.MAKER]: [],
};
