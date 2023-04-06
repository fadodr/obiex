import { CommandTypes } from '../../constants';
import { handleUpdateTransactions } from '../../messaging';
import { MessageBrokerInterface } from '../../types';

export const MessageBroker: MessageBrokerInterface = {
  sendToCommandsQueue: (command: string, payload: any) => {
    switch (command) {
      case CommandTypes.UPDATE_TRANSACTION:
        handleUpdateTransactions(payload)
        break
    }
  },

  sendToEventBus: (event: string, payload: any) => {
    console.log(`${event} sent to event bus with payload: `, payload)
  }
}

export const sendCommand = async (command: string, payload: any) => {
  return MessageBroker.sendToCommandsQueue(command, payload)
}
