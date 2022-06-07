import crypto from 'crypto';

export const validateLogin = (req, res, next) => {
  console.log(req.session);
  if (!req.session){
    res.redirct("/login");
  }else{
    next()
  }
}

export const passwordHash = (password) => {
  return crypto.createHmac('sha256', 'ELZA YORK!').update(password).digest('hex');
}