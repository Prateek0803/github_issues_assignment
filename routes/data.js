const router            = require('express').Router()
const dataController    = require('../controllers/data.js') 

router.get('/',             dataController.getData)
router.get('/labels',       dataController.getLabelData)
router.get('/assignees',    dataController.getAssigneesData)


module.exports = router;