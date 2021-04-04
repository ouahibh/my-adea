const Parent = require("../models/parents");

module.exports.addParent = async (req, res) => {
  const adress = req.body.adress;
  const telNumber = req.body.telNumber;
  const assurance = req.body.assurance;

  const assure = await Parent.findOne({ assurance: assurance }).exec();

  if (assure) {
    return res.send({ error: true, msg: "Ce numéro est déjà inscrit" });
  }

  const parentToSave = new Parent();
  parentToSave.adress = adress;
  parentToSave.telNumber = telNumber;
  parentToSave.assurance = assurance;
  parentToSave
    .save()
    .then((ok) => {
      res.send({ error: false, msg: "Le parent a été ajouter avec succès" });
    })
    .catch((err) => {
      res.send({
        error: true,
        msg: "Le parent n'a pas été ajouter avec succès",
      });
    });
};


