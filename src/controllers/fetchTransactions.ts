import { Transactions } from "../models";
import { ControllerArgs } from "../types";

export const fetchTransactions = async ({ query }: ControllerArgs) => {
    const { clientId } = query;

    const filter = {};
    if (clientId) {
        Object.assign(filter, { clientId });
    };

    const transactions =
        await Transactions.findAll({ where: filter });

    return {
        message: 'Transactions fetched successfully',
        data: transactions
    };
}