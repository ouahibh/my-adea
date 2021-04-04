const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//API incpription
module.exports.SignUp = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const qualite = req.body.qualite;
  const profession = req.body.profession;

  // Vérification l'existance de l'email en premier
  const user = await User.findOne({ email: email }).exec();
  if (user) {
    return res.send({ error: true, msg: "Votre compte exist déjà!" });
  }
  // hasshage du mot de passe
  const pass = await bcrypt.genSalt(10);

  const userToSave = new User();
  userToSave.name = name;
  userToSave.email = email;
  userToSave.password = await bcrypt.hash(password, pass);
  userToSave.qualite = qualite;
  userToSave.profession = profession;

  userToSave
    .save()
    .then((ok) => {
      res.send({ error: false, msg: "utilisateur ajouter avec succès" });
    })
    .catch((err) => {
      res.send({ error: true, msg: "L'utilisateur n'a pas été ajouter" });
    });
};
// API authentification
module.exports.Login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({ email: email }).exec();
  //Vérification de l'existance de l'email dans la base de donnée
  if (!user) {
    return res.send({
      error: true,
      msg: "Cette email n'existe pas dans la db",
    });
  }
  // Vérifier si le compte est validé
  if (user.valider == false) {
    return res.send({
      error: true,
      msg: "Votre compte n'a pas encore été validé",
    });
  }
  //Vérifier si le mot de passe est correct
  const passIsSame = await bcrypt.compare(password, user.password);
  if (!passIsSame) {
    return res.send({ error: true, msg: "Votre mot de passe est incorrect" });
  }
  let token = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCES_TOKEN_LIFE,
  });

  const myData = {
    token: token,
    user: user,
  };
  return res.send({ error: false, myData: myData });
};

// API de validation de compte
module.exports.userValider = (req, res) => {
  const id = req.body.id;

  User.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        valider: true,
      },
    }
  )
    .then((ok) => {
      res.send({ error: false, msg: "L'utilisateur à été validé" });
    })
    .catch((err) => {
      res.send({ error: true, msg: "L'utilisateur n'a pas été valider" });
    });
};

module.exports.AllUsersAuth = (req, res) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      } catch (err) {
        res.send({
          error: true,
          msg: "L'utilisateur n'est pas authentifier",
        });
      }
  User.find()
    .then((users) => {
      res.send({
        error: false,
        users: users,
      });
    })
    .catch((err) => {
      res.send((err) => {
        res.send({
          error: true,
          msg: "L'utilisateur n'a pas été trouver.",
        });
      });
    });
};
