const mongoose  = require('mongoose')

const dataSchema = new mongoose.Schema({
    title : {
        type : String    
    },
    created_at : {
        type : String
    },
    state : {
        type : String
    },
    labels : {
        type : Array
    },
    assignees : {
        type : Array
    }
})

module.exports = mongoose.model("Data",dataSchema)