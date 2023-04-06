import { UpdateTxnArg, DBTransactions } from '../types';

let mockedTransactions = [
    { clientId: '1', transactionId: '1' },
    { clientId: '1', transactionId: '2' },
    { clientId: '1', transactionId: '3' },
    { clientId: '1', transactionId: '4' },
    { clientId: '1', transactionId: '5' },
    { clientId: '2', transactionId: '6' },
    { clientId: '2', transactionId: '7' },
    { clientId: '2', transactionId: '8' },
    { clientId: '3', transactionId: '9' },
    { clientId: '4', transactionId: '10' },
    { clientId: '6', transactionId: '11' },
    { clientId: '4', transactionId: '12' },
];

export const callClientApi = async function({
  clientId,
  walletAddress,
  currencyType,
}: UpdateTxnArg): Promise<DBTransactions[]> {
    return new Promise((resolve) => {
        const resolvedTxn =
            mockedTransactions.filter((txn) => txn.clientId == clientId);
        resolve(resolvedTxn);
    });
}