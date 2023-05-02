import { UpdateTxnArg, DBTransactions } from '../types';

let mockedTransactions = [
    { id: '1', clientId: '1', walletAddress: 'abc', currencyType: 'NGN' },
    { id: '2', clientId: '1', walletAddress: 'abc', currencyType: 'USD' },
    { id: '3', clientId: '1', walletAddress: 'cde', currencyType: 'USD' },
    { id: '4', clientId: '1', walletAddress: 'abc', currencyType: 'NGN' },
    { id: '5', clientId: '1', walletAddress: 'cde', currencyType: 'USD' },
    { id: '6', clientId: '2', walletAddress: 'cde', currencyType: 'NGN' },
    { id: '7', clientId: '2', walletAddress: 'abb', currencyType: 'NGN' },
    { id: '8', clientId: '2', walletAddress: 'ead', currencyType: 'USD' },
    { id: '9', clientId: '3', walletAddress: 'cde', currencyType: 'NGN' },
    { id: '10', clientId: '4', walletAddress: 'abc', currencyType: 'USD' },
    { id: '11', clientId: '6', walletAddress: 'abc', currencyType: 'USD' },
    { id: '12', clientId: '4', walletAddress: 'ppp', currencyType: 'NGN' },
];

export const callClientApi = async function({
  clientId,
  walletAddress,
  currencyType,
}: UpdateTxnArg): Promise<DBTransactions[]> {
    return new Promise((resolve) => {
        const resolvedTxn =
            mockedTransactions.filter((txn) => (txn.clientId == clientId && txn.walletAddress == walletAddress && txn.currencyType == currencyType));
        resolve(resolvedTxn);
    });
}