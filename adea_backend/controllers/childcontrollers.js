const Child = require("../models/childs");
const jwt = require("jsonwebtoken");

module.exports.Integration = async (req, res) => {
  const fullName = req.body.fullName;
  const firstName = req.body.firstName;
  const dateOfBirth = req.body.dateOfBirth;
  const placeOfBirth = req.body.placeOfBirth;
  const diagnosticBy = req.body.diagnosticBy;
  const bloodGroup = req.body.bloodGroup;
  const comorbidity = req.body.comorbidity;
  const childOf = req.body.childOf;

  const name = await Child.findOne({ fullName: fullName, firstName: firstName }).exec();
  const birthDate = await Child.findOne({ dateOfBirth: dateOfBirth }).exec();

  if (name && birthDate) {
    return res.send({ error: true, msg: "L'enfant est déjà intégré" });
  }

  const childToSave = new Child();
  childToSave.fullName = fullName;
  childToSave.firstName = firstName;
  childToSave.dateOfBirth = dateOfBirth;
  childToSave.placeOfBirth = placeOfBirth;
  childToSave.diagnosticBy = diagnosticBy;
  childToSave.bloodGroup = bloodGroup;
  childToSave.comorbidity = comorbidity;
  childToSave.childOf = childOf;

  childToSave
    .save()
    .then((ok) => {
      res.send({ error: false, msg: "Enfant ajouter avec succès" });
    })
    .catch((err) => {
      res.send({ error: true, msg: "L'enfant n'a pas été ajouter" });
    });
};

module.exports.getChilds = (req, res) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      } catch (err) {
        res.send({
          error: true,
          msg: "L'utilisateur n'est pas authentifier",
        });
      }
    
      Child.find()
      .then((childs) => {
        res.send({
          error: false,
          childs: childs,
        });
      })
      .catch((err) => {
        res.send((err) => {
          res.send({
            error: true,
            msg: "La liste n'a pas été trouver.",
          });
        });
      });
}