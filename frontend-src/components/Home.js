import React, { useEffect } from "react"

function Home() {
  useEffect(() => {
    document.title = "My-React-Login"
  }, [])

  return (
    <div>
      <h2 className="display-4">Welcome to the homepage!</h2>
      <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quasi natus fugit ab laudantium dolores, dicta blanditiis sit eum perferendis minima sunt repudiandae voluptates tempore. Fuga dicta ipsa beatae vel?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.   </p>
    </div>
  )
}

export default Home
