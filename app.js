require('dotenv').config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors')

// MY ROUTES
const movieRoutes = require('./routes/movie')
const contactRoute = require('./routes/contact')

//INITILIZING THE APP
const app = express();

// Database connection code

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology : true,
  useCreateIndex: true
})
.then(() => {
  console.log(`DB IS CONNECTED!`)
})
.catch((e) => {
  console.log("NOT CONNECTED!")
})
// PORT
const port = process.env.PORT || 8000;

// MIDDLEWARES
app.use(bodyParser.json());
app.use(cors())
app.use('/uploads', express.static('uploads'))
app.use(cookieParser());

//ROUTES
app.use("/api/movies", movieRoutes)
app.use("/api", contactRoute)



app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
