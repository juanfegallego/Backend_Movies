const router = require("express").Router();
const loginController = require("../controllers/login.controller");
const userController = require("../controllers/usersControllers");

router.post("/", async (req, res) => {
    try {
        const emailCheck = req.body.email;
        const passwordCheck = req.body.password;
        let token = await loginController.validate( emailCheck, passwordCheck );
        let user = await userController.emailUser( emailCheck );
        res.status(200).json( {token, user})
        
         throw new Error ("login incorrecto")
    } catch (error) {
         res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;