import React from 'react'

export const Button = (props) => {
  return (
    <div>
    {(props.status === 0)?
    <button className='btn-start' onClick={props.start}>Start</button> 
    : ""
    }
    {(props.status === 1)?
    <div>
        <button className='btn-stop' onClick={props.stop}>Stop</button>
        <button className='btn-reset' onClick={props.reset}>Reset</button>
    </div> : ""    
}
    
    {(props.status === 2)?
    <div>
        <button className='btn-resume' onClick={props.resume}>Resume</button>
        <button className='btn-reset' onClick={props.reset}>Reset</button>
    </div> : ""    
}
    
</div>
  )
}
