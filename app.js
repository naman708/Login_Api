
const path = require('path'); 
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

const User=require('./models/user');

const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());

app.use(bodyParser.json({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(userRoutes);




sequelize.sync({}).then(() => {
  console.log('Database & tables created!');
});
console.log(`port>>>>>>>>>>>>>>${process.env.PORT}`);
app.listen(process.env.PORT, () => {
  console.log('Server is running on port 3000');
});


 


