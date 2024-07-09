import React from 'react'
import '../Header/PetHeader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'

export default function PetHeader(){
  return(
    <div className='header'>
        <h1>HAVE A PUPPY DAY</h1>
            <input type='text' placeholder='용품 검색'></input>
            <FontAwesomeIcon icon={faSearch}  className='icon'/>
    </div>
  )
}
