# obiex

To run the project, set up your env files for database and port configuration then make sure docker is install on your computer and run the following commands

```javascript
npm run infra
```

This command will start the database and the server

In this app, we have a message broker object which is an abstraction of a rabbitmq message broker. This message broker can send a command to a queue and also send an event to the event bus. By sending a command to a queue, we have an endpoint that simulate what the client microservice does by sending a updateTransation command to the queue. When the command is sent to the queue, the transaction service will then pick up the command and handle the update transaction which does the following :

1. It logs the request of the command to the console and also save the log into the sql database

2. It calls the client api and fetch all the transactions for the client that issued this command 

3. when all the transactions have been fetched , we fetched all the transactions in our database for this same client so as to filter the new transactions from the old ones

4. After filtering the new transactions , we then saved then into our database and send all the new transaction to the event bus where it will be processed.

NB: The sendToCommand endpoint is use to test the functionality of the app

POSTMAN DOCUMENTATION:

https://documenter.getpostman.com/view/11326200/2s93RZM9ip