import React                    from 'react'
import {VscIssues}              from 'react-icons/vsc'
import {AiOutlineCloseCircle}   from 'react-icons/ai'
const Card = () => {
  return (
    <div className='card_container'>
        <div className='card_container_header'>
            <div style={{display : 'flex', justifyContent : 'space-around'}}>
                <div>
                <VscIssues />Open
                </div>
                <div>
                <AiOutlineCloseCircle/>  Closed
                </div>
                <div>
                    Labels
                </div>
                <div>
                    Assignes
                </div>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Card
