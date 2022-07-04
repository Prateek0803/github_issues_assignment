const axios         = require('axios')
const data          = require('../models/data')
const ALL_URL       = 'https://api.github.com/repos/pallets/click/issues?state=all&per_page=100'
const LABELS_URL    = 'https://api.github.com/repos/pallets/click/labels'
const ASSIGNES_URL  = 'https://api.github.com/repos/pallets/click/assignees'



exports.saveData = async() =>{
    let allData  = await axios.get(ALL_URL)

    allData.data.map(async(element) =>{
        let saved = new data({
            title           : element.title,
            created_at      : element.created_at,
            state           : element.state,
            labels          : element.labels,
            assignees       : element.assignees,
        }) 

       try {
            const savedData = await saved.save()
            console.log('data saved')
        } catch (error) {
            console.log(error)
        }
    }) 
}


exports.getData = async(req,res) =>{
    try {
        let resData = await data.find({})
        res.status(200).send(resData)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.getLabelData = async(req,res) =>{
    try {     
        let allData = await axios.get(LABELS_URL)
        let names = []
            allData.data.map((data) =>{
            names.push(data.name)
            })
            res.status(200).send(names)
    } catch (error) {
        
        res.status(500).send(error)
        console.log(error)
    }
        /* process.exit() */
}

exports.getAssigneesData = async(req,res) =>{
    try {
        let allData = await axios.get(ASSIGNES_URL)
        console.log(allData)
        let assignees = []
            allData.data.map((data) =>{
                assignees.push(data.login)
            })
        res.status(200).send(assignees)
    } catch (error) {
        res.status(500).send(error)
    }    
}