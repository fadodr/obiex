import { UpdateTxnArg } from '../../types';
import { logger, callClientApi } from '../../helpers';
import { UpdateTransactionRequest, Transactions } from '../../models';
import { MessageBroker } from '../../components/messageBroker';
import { CommandTypes } from '../../constants';

export async function handleUpdateTransactions({
  clientId,
  walletAddress,
  currencyType,
}: UpdateTxnArg) {
  const log = `Request made by client ${clientId} with wallet address ${walletAddress} for ${currencyType}`;
  logger.info(log);
  //log the request to the relational database
  await UpdateTransactionRequest.create({ log });
  //Call the third party api to fetch all transactions for the wallet address
  const transactions = await callClientApi({
    clientId,
    walletAddress,
    currencyType,
  });

  //fetch all existing transactions in the database
  const fetchedTxns = await Transactions.findAll({ where: { clientId } });
  let existingTxns = new Set(fetchedTxns.map((txn) => txn.transactionId));
  const newTrasanctions = transactions.filter(
    (txn) => !existingTxns.has(txn.transactionId)
  );

  //save unique transactions to the database
  await Transactions.bulkCreate(newTrasanctions);

  //Push new transactions to the event bus for proecessing
  newTrasanctions.forEach((txn) =>
    MessageBroker.sendToEventBus(CommandTypes.NEW_TRANSACTION, txn)
  );
}