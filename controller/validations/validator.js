const Joi = require('joi')
  
//User-defined function to validate the user
function validateUser(user)
{
    const JoiSchema = Joi.object({
                               
        emailCliente: Joi.string()
               .email()
               .min(5)
               .max(50)
               .optional(), 
        senhaCliente: Joi.string()
               .min(6)
               .max(50)
               .optional(),
        cpfCliente: Joi.number()
               .min(11)
               .max(11)
               .optional(),  
                                                
        
    }).options({ abortEarly: false });
  
    return JoiSchema.validate(user)
}
  
  
response = validateUser()
  
if(response.error)
{  
    console.log(response.error.details)
}
else
{
    console.log("Validated Data")
}




module.exports = validateUser