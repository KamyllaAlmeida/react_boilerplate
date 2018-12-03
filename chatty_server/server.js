const WebSocket = require('ws');
const express = require('express');
const SocketServer = require('ws').Server;
const uuidv1 = require('uuid/v1');

let clientsConnected = 0;

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

function sendClientsConnected (connections) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(connections);
    }
  });
}


wss.on('connection', function connection(ws) {
  console.log('Client connected');
  clientsConnected++;
  sendClientsConnected(clientsConnected);

  ws.on('message', function incoming(data) {
    // Broadcast to all.
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        const message = JSON.parse(data);
        message['id'] = uuidv1();
        client.send(JSON.stringify(message));
      }
    });
  });

  ws.on('close', function disconnected(){
  console.log('Client disconnected');
  clientsConnected--;
  sendClientsConnected(clientsConnected);
  });

});