

let userController = {}

userController.login = function (req, res, next) {
  //esse teste abaixo deve ser feito no seu banco de dados
  if(req.body.user === 'aldy' && req.body.password === '123'){
    const id = 1; 
    const token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 300 
    });
    return res.json({ auth: true, token: token });
  }
  
  res.status(500).json({message: 'Login invalid!'});
}

export default userController;