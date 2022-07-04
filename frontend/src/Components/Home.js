import React,{useEffect,useState}               from 'react'
import { getAll,getLabelData,getAssigneesData } from '../apis/apis'
import Navbar                                   from './Navbar'
import Issues_Nav                               from './Issues_Nav'
import ListCards                                from './List_Cards/ListCards'
const Home = () => {
  const [allData,setAllData]            = useState([])
  const [openData,setOpenData]          = useState([])
  const [labels,setLables]              = useState([])
  const [assignees,setAssignees]        = useState([])

    
  useEffect(() =>{
      let issues_data = getAll()
      issues_data.then((data) => {
        setAllData(data.data)
        setOpenData(data.data)
      })
      .catch((err) => console.log(err))
      
      let assigneesData = getAssigneesData()
      assigneesData.then((data) =>{
        setAssignees(data.data)
      })
      .catch((err) => console.log(err))
      
      let labelsData = getLabelData()
      labelsData.then((data) =>{
        setLables(data.data)
      })
      .catch((err) => console.log(err))
  },[])


  const handleFilter = (action) =>{
    switch(action){
        case 'open' :
              let resultOpen = openData.filter((data) => data.state === action)
              setAllData(resultOpen)
              return allData

        case 'closed' :
          let resultClose = openData.filter((data) => data.state === action)
          setAllData(resultClose)
          return allData
        
        default:
          setAllData(openData)
          return setAllData
    }
}

const onFilterChange = (event,action) =>{
    let value = event.target.value
    console.log(value)
    switch(action){
      case 'label' :
        let data = openData.filter((element) => element.labels?.map((elem) => elem.name === value))
        setAllData(data)
        return allData
      case 'assignee' :
          let result = openData.filter((element) => element.assignee?.map((assign) => assign.login === value))
          setAllData(result)
          return allData
      default:
        setAllData(openData)
        return allData      
    }
}



  const onLabels = (name) =>{ 
    console.log('name' , name)
    let tempData =  openData.filter((element) => element.assignees.login === name )
    setAllData(tempData)
  }


  return (
    <div>
      <Navbar />
      <Issues_Nav />
      <ListCards 
        allData         = {allData} 
        labels          = {labels} 
        assignees       = {assignees}
        onLabels        = {onLabels}
        onFilterChange  = {onFilterChange}
        handleFilter    = {handleFilter} 
        />
    </div>
  )
}

export default Home
