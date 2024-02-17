import React from 'react'
import loading from './loading.gif'
const Spinner = ()=>{

    return (
      <div className='text-center my-4'>
        <img src={loading} alt="" width={50} height={50} />
      </div>
    )
  }

export default Spinner ;
