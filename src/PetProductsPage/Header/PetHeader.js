import React from 'react'
import '../Header/PetHeader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function PetHeader(){
  return(
    <div className='header'>
        <Link to="/"><h1>HAVE A PUPPY DAY</h1></Link>
            <input type='text' placeholder='용품 검색'></input>
            <FontAwesomeIcon icon={faSearch}  className='icon'/>
    </div>
  )
}
