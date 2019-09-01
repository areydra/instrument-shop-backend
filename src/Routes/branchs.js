const express = require('express')
const router  = express.Router()
const branchsController = require('../Controllers/branchs')

router.get('/branchs', branchsController.getBranchs)
router.get('/branchs/:id', branchsController.getBranchsDetail)
router.post('/branchs', branchsController.postBranchs)
router.patch('/branchs/:id', branchsController.patchBranchs)
router.delete('/branchs/:id', branchsController.deleteBranchs)

module.exports = router