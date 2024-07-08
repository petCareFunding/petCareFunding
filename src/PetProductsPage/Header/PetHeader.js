import React from 'react'
import '../Header/PetHeader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'

const PetHeader = () => {
  return (
    <div>
        <h1 className='Pet-title'>HAVE A PUPPY DAY</h1>
        <from className="search-box">
            <input className='search' type='text' placeholder='용품검색...'></input>
            <FontAwesomeIcon icon={faSearch } className='icon'/>
        </from>
    </div>
  )
}

export default PetHeader
