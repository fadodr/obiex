import { CommandTypes } from '../../constants';
import { handleUpdateTransactions } from '../../messaging';
import { MessageBrokerInterface } from '../../types';
import { logger } from '../../helpers';

export const MessageBroker: MessageBrokerInterface = {
  sendToCommandsQueue: (command: string, payload: any) => {
    switch (command) {
      case CommandTypes.UPDATE_TRANSACTION:
        handleUpdateTransactions(payload)
        break
    }
  },

  sendToEventBus: (event: string, payload: any) => {
    logger.info(`${event} sent to event bus with payload: ${payload}`);
  }
}

export const sendCommand = async (command: string, payload: any) => {
  return MessageBroker.sendToCommandsQueue(command, payload)
}
