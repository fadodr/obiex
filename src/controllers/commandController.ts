import { ControllerArgs } from '../types';
import { sendCommand } from '../components';
import { CommandTypes } from '../constants';

export const commandController = async ({ input }: ControllerArgs) => {
  await sendCommand(CommandTypes.UPDATE_TRANSACTION, input);

  return {
    message: "command sent succfully",
    data: input
  };
};
