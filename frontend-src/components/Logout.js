import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import Home from "./Home"  


function Logout(props) {
  
      if(localStorage.getItem('Token')) {
        props.logoutfn()
      } 

  return (
    <div>
      <h2 className="display-4">GoodBye!</h2> 
    </div>
  )
}

export default Logout
