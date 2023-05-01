import { IncomingHttpHeaders } from 'http';

export interface ControllerArgs {
  input: any;
  params: any;
  query: any;
  headers: IncomingHttpHeaders;
}

export interface ValidationResult {
  code: string;
  path: string;
  message: string;
}

export interface MessageBrokerInterface {
  sendToCommandsQueue: (command: string, payload: any) => void;
  sendToEventBus: (event: string, payload: any) => void;
}


export interface DBTransactions {
  id: string;
  clientId: string;
  walletAddress: string;
  currencyType: string;
};