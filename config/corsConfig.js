const configureCors = ()=>{
  return({
    origin: (origin, callback)=>{
      const allowedOrigins = [
        "http://localhost:3000",
        "https://yourcustomdomain.com"
      ]
      if(!origin || allowedOrigins.indexOf(origin)!==-1){
        return callback(null, true)
      }else{
        return callback(new Error('Not allowed by cors'))
      }
        
    }, 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept-Version'],
    exposedHeaders: ['X-Total-Count', 'Content-Range'],
    credentials: true, //enable support for cookies
    preflightContinue: false,
    maxAge: 600, //cache pre-flight responses; prevents OPTION request misuse (600 seconds)
    optionsSuccessStatus: 204
  })
}

module.exports = { configureCors }