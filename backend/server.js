const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
require('dotenv').config();


// Create server to serve index.html
const app = express();
// app.use(express.static(path.join(__dirname, 'build')));
// // app.get('/', function (req, res) {
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
const http = require('http').Server(app);
// const io = require('socket.io')(http);
const port = process.env.PORT || 3001;

// Connect to mongo
const mongoUrl = process.env.DB_URL;
mongoose.set("useUnifiedTopology", true);
mongoose.connect(mongoUrl, {useNewUrlParser: true});
db = mongoose.connection;
db.on('error', error => {
  console.log(error);
})
db.once('open', () => {
  console.log('MongoDB connected!');
})

const { authRoute, verifyToken } = require('./routes/auth');
// const { rankRoute, setSocketIO } = require('./routes/rank');
const apiRoute = require('./routes/api');
const eventRoute = require('./routes/event');
const pushRoute = require('./routes/push');
// setSocketIO(io);

// Routing
app.use(cors());
app.use(bodyParser.json());
app.use(verifyToken);
app.use('/auth', authRoute);
app.use('/event', eventRoute);
app.use('/push', pushRoute);
// app.use('/ticket', ticketRoute);
// app.use('/rank', rankRoute);
app.use('/', apiRoute);
// app.set('io', io);

// Start server listening process.
http.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});