const getContact = (req, res) => {
    res.status('200').json({ "message": "getallcontact" })
}
const postContact = (req, res) => {
    res.status('200').json({ "message":`createcontact${req.body.name}` })
}
const putContact = (req,res)=>{
    res.status('200').json({"message": `updated ${req.params.id}`})
}
const deleteContact = (req,res)=>{
    res.status('200').json({"message": `deleted ${req.params.id}`})
}


// module.exports = { getContact }
// module.exports = {postContact}
module.exports = {getContact,postContact,putContact,deleteContact}