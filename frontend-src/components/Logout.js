import React, { useEffect } from "react"

function Logout() {
  useEffect(() => {
    document.title = "My React Login"
  }, [])

  console.log("logout component")

  return (
    <div>
      <h2 className="display-4">Comming soon!!</h2>
      <p className="lead">. </p>
      
    </div>
  )
}

export default Logout
