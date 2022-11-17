import React from 'react'

function SearchBox(props) {
  return (
    <div className='col col-sm-4'>
      <input className='form-control' placeholder='Enter Movie Name...' value={props.value} onChange={(e) => props.setInput(e.target.value)}></input>
    </div>
  )
}

export default SearchBox
