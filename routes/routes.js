const express = require('express');
const router = express.Router();
const controller = require('../controller/employController');
const fileController = require('../controller/controlFilesController')

//FOR EMPLOYERS
router.route('/employ')
.get(controller.getEmployees)
.post(controller.addUser) 

router.route('/employ/:id')
.get(controller.getOneEmployer)
.patch()
.delete()

router.get('/readfile', fileController.readFromFile)
router.post('/createfile', fileController.createNewFile)
router.post('/writefile', fileController.writeInAFile)
router.post('/add-data', fileController.addDataJson)

//FOR SOMETHING


module.exports = router;