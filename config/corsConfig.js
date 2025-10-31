const corsConfig = ()=>{
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
        
    }
  })
}