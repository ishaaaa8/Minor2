const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to Database
connectDB();
// try {
//     mongoose.connect(process.env.MONGO_URI);  
//     console.log("DB Connected");
//   } catch (err) {
//     console.log(err);
//   }
  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));