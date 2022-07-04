const mongoose  = require('mongoose')
const URL       = 'mongodb://localhost/assignment'

const db = () =>{
    mongoose.connect(URL,{
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(() => 
        console.log('database connected')
    )
    .catch((err) => console.log(err))
}

module.exports = db;