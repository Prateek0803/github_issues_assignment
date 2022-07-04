const user = require('../models/user.js')


exports.userRegister = async(req,res) =>{
    let body = req.body;
    const newUser = new user({
        name        : body.name,
        email       : body.email,
        password    : body.password
    })
    try {
        const savedUser = await newUser.save()
        res.status(201).send({savedUser})
        console.log({savedUser})
    } catch (error) {
        res.status(500).send({error})
        console.log({error})
    }
}

exports.userLogin = async(req,res) =>{
    let body = req.body;
    try {
        let registerUser = await user.findOne({email : body.email , password : body.password})
        if(!registerUser){
            res.status(500).send('user not found')
        }else{
            console.log('logged in successfully',{registerUser})
            res.status(200).send('logged in successfully')
        }
    } catch (error) {
        res.status(500).send({error})
    }

}
