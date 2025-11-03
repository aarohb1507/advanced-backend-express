require('dotenv').config()
const express = require('express')
const {configureCors} = require('./config/corsConfig')
const { requestLogger, addTimeStamp } = require('./middleware/customMiddleware')
const app = express()
const PORT = process.env.PORT || 3000
const { globalErrorHandler } = require('./middleware/errorHandler')
const { urlVersioning } = require('./middleware/apiVersioning')
const { createBasicRateLimiter } = require('./middleware/rateLimiting')
// json middleware

app.use(requestLogger)
app.use(addTimeStamp)
app.use(configureCors())
app.use(createBasicRateLimiter(100, 15*60*1000))//100 requests allowed, per 15 mins
app.use(express.json())
app.use('api/v1', urlVersioning('v1'))
app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});

