import React, { useEffect } from "react"

function Home() {
  useEffect(() => {
    document.title = "My React Login"
  }, [])


  return (
    <div>
      <h2 className="display-4">Welcome to the homepage!</h2>
    </div>
  )
}

export default Home
