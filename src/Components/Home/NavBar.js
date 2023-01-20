import {React,useState} from 'react'
function NavBar() {
    const [state,setState]=useState(false)
  return (
    <div className='navBar' style={{width:state?'100%':'4%'}} onClick={()=>setState(!state)}>
        <h1>L</h1> 
        <div className='navBtn'>
            <div className='line1 '></div>
            <div className='line2'></div>
        </div>
        <p style={{fontSize:'1.5rem'}}>01</p>
    </div>
  )
}


export default NavBar