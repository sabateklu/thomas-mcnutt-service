const cors = require('cors');

const app = require('./index.js');

const PORT = 3003;
app.use(cors());

app.listen(PORT, (err) => {
  if (err) { console.log('Error starting server'); } else {
    console.log(`Listening on port ${PORT}`);
  }
});
