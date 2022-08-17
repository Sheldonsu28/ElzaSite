const ErrorHandler = (err, req, res, next)=>{
  if (err){
    res.status(500).send('啊这，服务器开小差了！');
  }else{
    next();
  }
};

export default ErrorHandler;