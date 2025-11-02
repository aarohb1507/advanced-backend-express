const requestLogger = (req, res, next)=>{
  const timestamp = new Date().toISOString()
  const url = req.url
  const method = req.method
  const userAgent = req.get('User-Agent')

  console.log(`[${timestamp}] ${method} ${url} - ${userAgent}`);
  next()
  
}

const addTimeStamp = (req, res, next)=> {
  req.timestamp = new Date().toISOString()
  next()
}

module.exports = {requestLogger, addTimeStamp}