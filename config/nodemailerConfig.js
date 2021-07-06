const nodemailer = require("nodemailer");

const user = "appmovie19@gmail.com";
const pass = "Cocacola_19";

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: user,
    pass: pass,
  },
});


module.exports.sendConfirmationEmail = (name, email, confirmationCode) => {
  transport.sendMail({
    from: user,
    to: email,
    subject: "Your Movies - Por favor, confirma tu cuenta de correo.",
    html: `<h1>Correo de Activación de cuenta</h1>
        <h2>Hola ${name}</h2>
        <p>Gracias por registrarte en Your Movies.  
        Por favor, confirma tu email haciendo click en el siguiente enlace.</p>
        <a href=http://localhost:3001/users/confirm/${confirmationCode}> Activar cuenta.</a>
        </div>`,
  }).catch(err => console.log(err));
};

