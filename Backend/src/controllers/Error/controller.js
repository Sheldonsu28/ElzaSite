const ErrorHandler = (err, req, res, next)=>{
  if (err){
    res.status(400).send();
  }else{
    next();
  }
};

export default ErrorHandler;