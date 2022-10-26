const { body } = require('express-validator');
const users = require('../data/Users.json');
module.exports = [
    body('name').notEmpty().trim().withMessage('Debe ingresar su nombre').bail()
    .isLength({min:3}).withMessage('Debe contener al menos 3 caracteres'),

    body('lastName').notEmpty().trim().withMessage('Debe ingresar su apellido').bail()
    .isLength({min:3}).withMessage('Debe contener al menos 3 caracteres'),

    body('email').trim().notEmpty().withMessage('Debe ingresar su email').bail()
    .isEmail().withMessage('Debe ingresar un formato de correo válido').bail()
    .custom((value, { req }) => {
      let user = users.find((user) => user.email === value.trim());
      return !!!user;
    })
    .withMessage("El email ya se encuentra registrado"),

    
   

    body('phoneNumber').notEmpty().withMessage("Debe ingresar su número telefónico").bail()
    .isNumeric(),

    body('city').notEmpty().withMessage('Debe ingresar su ciudad'),

   

];