const express = require('express')
const router = express.Router()
// //GET
// router.route('/').get((req,res)=>{
//     res.status('200').json({"message":"getallcontact"})
// })

// //POST
// router.route('/').post((req,res)=>{
//     res.status('200').json({"message":`createcontact${req.body.name}`})
// })

//same routes can be chained
router.route('/').get((req,res)=>{
    res.status('200').json({"message":"getallcontact"})
}).post((req,res)=>{
    res.status('200').json({"message":`createcontact${req.body.name}`})
})

//DELETE
router.route('/:id').delete((req,res)=>{
    res.status('200').json({"message":`deleted ${req.params.id}`})
})

//PUT
router.route('/:id').put((req,res)=>{
    res.status('200').json({"message":`updated ${req.params.id}`})
})

module.exports=router