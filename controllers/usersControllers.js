const { User } = require("../models");
const bcrypt = require("bcrypt");
const nodemailer = require ("../config/nodemailerConfig")

class Users {

    // async createUser(body) {

    //     let password = body.password
    //     let passwordHashed = bcrypt.hashSync(password, 10)

    //     body.password = passwordHashed
    //     return User.create(body);
    // }

    async emailUser(email) {
        return User.findOne({
            where: { email }
        })
    }

    async findAllUsers() {
        return User.findAll();
    }

    async modifyUser(body) {

        return User.update(
            //DAtos que cambiamos
            {
                edad: body.edad,
                direccion: body.direccion,
                cp: body.cp,
                email: body.email,
                telefono: body.telefono
            },
            //Donde
            { where: { id: body.id } }

        )
    }

    async userId(id) {

        return User.findByPk(id);
    }

    async users_by_cp(body) {

        return User.findAll({ where: { cp: body.cp } })
    }

    async deleteUser(id) {

        return User.destroy({ where: { id: id } });
    }

    async createUser(user) {
        user.password = await bcrypt.hash(user.password, 10);
        //Creamos una token que enviamos por mail para activar
        const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let token = '';
        for (let i = 0; i < 25; i++) {
            token += characters[Math.floor(Math.random() * characters.length)];
        }
        user = {
            name: user.name,
            surname: user.surname,
            email: user.email,
            password: user.password,
            birthday: user.birthday,
            address: user.address,
            country: user.country,
            city: user.city,
            telephone: user.telephone,
            token: token
        }
        let usuario = await User.create(user);
        //Llamamos a la funcion para enviar el correo al usuario.
        await nodemailer.sendConfirmationEmail(user.name, user.email, token);
        return usuario;
    }

    async findByToken(token) {
        return User.findOne({ token: token });
    }


    //Activa la cuenta del usuario buscando la token dada por el parámetro.
      async updateActive(token) {
        let user = await User.findOne({where:{token}});
        let usuario = await User.update(
            {
                isActive: true,
              },
              {where: {id: user.id}}
        );
        let resultado = "La cuenta se ha activado correctamente. Por favor, ve a la web de PROYECTO para entrar en tu área de usuario.";
        return resultado;
      }
    


}
let usersController = new Users();
module.exports = usersController;