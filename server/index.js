// const newrelic = require('newrelic');
// const express = require('express');
// const cluster = require('cluster');
// const numCPUs = require('os').cpus().length;
// const cors = require('cors');
const Controller = require('./Controller.js')

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(__dirname + '/../client/dist'));

const port = 3000;
const app = express();

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(__dirname + '/../client/dist'));
app.get('/api/bookings/:booking_id', Controller.find);

// All workers use this port
app.listen(port, () => console.log(`listening at http://localhost:${port}`));

// if (cluster.isMaster) {
//   for (let i = 0; i < numCPUs; i++) {
//     // Create a worker
//     cluster.fork();
//   }
// } else {
//   // Workers share the TCP connection in this server
//   const port = 3000;
//   const app = express();

//   app.use(cors());
//   app.use(express.json());
//   app.use(express.urlencoded({ extended: true }));
//   app.use('/', express.static(__dirname + '/../client/dist'));
//   app.get('/api/bookings/:booking_id', Controller.find);

//   // All workers use this port
//   app.listen(port, () => console.log(`listening at http://localhost:${port}`));
// }
