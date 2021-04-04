const Employee = require("../models/employees");


module.exports.addEmplyee = async (req, res) => {
    const adress = req.body.adress;
    const dateOfBirth = req.body.dateOfBirth;
    const telNumber = req.body.telNumber;
    const post = req.body.post;
    const dateOfHiring = req.body.dateOfHiring;
    const assurance = req.body.assurance;
    const ccpNumber = req.body.ccpNumber; 

    const assure = await Parent.findOne({ assurance: assurance }).exec();

  if (assure) {
    return res.send({ error: true, msg: "Ce numéro est déjà inscrit" });
  }

    const employeeToSave = new Employee();
    employeeToSave.adress = adress;
    employeeToSave.dateOfBirth = dateOfBirth;
    employeeToSave.telNumber = telNumber;
    employeeToSave.post = post;
    employeeToSave.dateOfHiring = dateOfHiring;
    employeeToSave.assurance = assurance;
    employeeToSave.ccpNumber = ccpNumber;
    employeeToSave.save().then((ok) => {
        res.send({ error: false, msg: "L'employé a été ajouté avec succès" });
      })
      .catch((err) => {
        res.send({
          error: true,
          msg: "L'employé  n'a pas été ajouter avec succès",
        });
      });

}