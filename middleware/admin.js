const jwt = require('jsonwebtoken');
const secret = "Somos un equipazo";

const admin = (req,res,next) => {
    try {

        if(!req.headers.authorization) {
            // return new Error("No tienes autorización");
            return "no tenías token ";
        }

        let token = req.headers.authorization.split(' ')[1];
        let auth = jwt.verify(token,secret);

        if( auth.isAdmin == false ) {
            throw new Error("No tienes permiso para realizar esta acción");
        }

        return next();

    } catch(error) {
        res.status(500).json({
            message: error.message
        });
    }
};
//Esto va por ti
module.exports = admin;