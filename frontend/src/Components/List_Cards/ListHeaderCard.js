import React from 'react'
import '../../styles/listcards.css'

const ListHeaderCard = () => {
  return (
    <div className='list_header_container'>
        <h5>Want to contribute to pallets/click?</h5>
        <p style={{marginTop : '15px'}}>If you have a bug or an idea, read the <span style={{color : 'blue'}}>contributing guidelines</span> before opening an issue.</p>
    </div>
  )
}

export default ListHeaderCard
