import axios from 'axios'
/* const ALL_URL       = 'https://api.github.com/repos/pallets/click/issues?state=open&per_page=100'
const CLOSED_URL    = 'https://api.github.com/repos/pallets/click/issues?state=closed&per_page=100' */



export const getAll = async() =>{
    const data  = await axios.get('http://localhost:5000/data/')
    return data
}

export const getLabelData = async() =>{
    const data  = await axios.get('http://localhost:5000/data/labels')
    return data
}

export const getAssigneesData = async() =>{
    const data = await axios.get('http://localhost:5000/data/assignees')
    return data
}