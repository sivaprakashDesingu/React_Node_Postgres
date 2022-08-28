const express = require('express');
const client = require('./config/connection');
const bodyParser = require("body-parser");
const app = express();
const port = 5000;
const cors = require('cors');
const user = require('./routes/user');
const path = require('path')

app.use(express.json());
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )
app.use(cors())

async function testConnection() {
    const c = await client.connect(); 
    return c; // return server version
}
const isConnected = testConnection();
console.log(isConnected)

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/Client/build/index.html'));
// });

app.post('/login', user.login);
app.post('/logout', user.logOut);
app.get('/fetchBuildList', user.fetchBuilds);

app.listen(port, () => {
    console.log(`Your server running at Porst ${port}.`);
});