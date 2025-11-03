const rateLimit = require('express-rate-limit')

const createBasicRateLimiter = (maxRequests, time)=>{
  return rateLimit({
    max: maxRequests,
    WindowMs: time,
    message: "too many requests, please try again later",
    standardHeaders: true,
    legacyHeaders: false
  })
}

module.exports = {createBasicRateLimiter}