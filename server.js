require('dotenv').config()
const express = require('express')
const {configureCors} = require('./config/corsConfig')
const { requestLogger, addTimeStamp } = require('./middleware/customMiddleware')
const app = express()
const PORT = process.env.PORT || 3000
const { globalErrorHandler } = require('./middleware/errorHandler')

// json middleware
app.use(express.json())
app.use(requestLogger)
app.use(addTimeStamp)
app.use(configureCors())
app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});

