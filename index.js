const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors());
app.set('port', process.env.PORT || 5000);
app.use(express.json());
app.use(require('./src/routes/routes.js'))
app.listen(app.get('port'),()=>{
  console.log('server is listening on port ', app.get('port'));
})
