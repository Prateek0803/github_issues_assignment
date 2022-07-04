import React          from 'react'
import ListHeaderCard from './ListHeaderCard'
import Card           from './Card'

const ListCards = ({allData, labels, handleFilter, assignees, onFilterChange, onLabels}) => {

  return (
    <div>
      <ListHeaderCard />
      <Card 
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

export default ListCards
