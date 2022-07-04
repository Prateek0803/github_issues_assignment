import React, { useState,useEffect }    from 'react'
import { Badge }                        from 'reactstrap'
import {VscIssues}                      from 'react-icons/vsc'
import {AiOutlineCloseCircle}           from 'react-icons/ai'
import { BiReset }                      from 'react-icons/bi'


const Card = ({allData,labels,assignees,onFilterChange,handleFilter}) => {

  return (
    <div className='card_container'>
        <div className='card_container_header'>
            <div style={{display : 'flex', justifyContent : 'space-around'}}>
                <div onClick={() => handleFilter()}>
                    <BiReset  /> <span>All</span>
                </div>
                <div onClick={()=> handleFilter('open')}>
                    <VscIssues /> <span>Open</span>
                </div>
                <div onClick={() => handleFilter('closed')}>
                    <AiOutlineCloseCircle /><span> Closed</span>
                </div>
                <div>
                    <label style={{margin : '0 5px'}}>Labels:</label>
                    <select onChange = {(event) => onFilterChange(event,'label')} >
                        <option value="All">All</option>
                        {labels.map((label,id) =>(
                            <option 
                                key = {id} 
                                value={label} 
                            >
                                {label}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label style={{margin : '0 5px'}}>Assignees:</label>
                    <select onChange={(event) => onFilterChange(event,'assignee')}>
                        <option value="All">All</option>
                        {assignees.map((assignee,id) =>(
                            <option   key = {id} value={assignee} >
                                {assignee}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
        <hr />
        <div>
            {allData.map((element,id) =>(
                <div key={id}>
                    <h6>{element.title}</h6>
                    <Badge pill color='dark'>{element.state}</Badge>
                    {element.labels.map((data) =>(
                        <Badge style={{margin : '0 5px'}} pill color='info'>
                            {data.name}
                        </Badge>
                    ))}
                    <hr/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Card
