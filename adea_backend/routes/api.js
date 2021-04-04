const express = require('express');
const { Integration, getChilds } = require('../controllers/childcontrollers');
const { addEmplyee } = require('../controllers/employeecontrollers');
const { addParent } = require('../controllers/parentcontrollers');
const { SignUp, Login, AllUsersAuth, userValider,  } = require('../controllers/usercontrollers');


const router = express.Router();
// Users API
router.post('/signup', SignUp);
router.post('/login', Login);
router.post('/uservalider', userValider);
router.get('/allusersauth', AllUsersAuth);
// Childs API
router.post('/integration', Integration);
router.get('/getchilds', getChilds);
// Parents API
router.post('/addparent', addParent);

// emplyees API
router.post('addemployee', addEmplyee);

module.exports = router