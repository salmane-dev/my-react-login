import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Link, NavLink, Switch } from "react-router-dom"
import Home from "./components/Home"  
import Secret from "./components/Secret"
import Logout from "./components/Logout"

function App() {
  return (
    <BrowserRouter>
      <header className="bg-light pt-3">
        <div className="container">
          <h2 className="display-2">My React Login </h2>
          <ul className="nav nav-tabs">
            
            <li className="nav-item mx-4">
              <NavLink to="/" className=" " activeClassName=" ">
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-4">
              <NavLink to="/secret" className=" " activeClassName=" ">
                Login
              </NavLink>
            </li>
            <li className="nav-item mx-4">
              <NavLink to="/logout" className=" " activeClassName=" ">
                Logout
              </NavLink>
            </li>
    
          </ul>
        </div>
      </header>

      <div className="container py-3 py-md-5">
        <Switch>
         
          <Route path="/secret">
            <Secret />
          </Route>
          
          <Route path="/logout">
            <Logout/>
            {console.log("logout")}
          </Route>
          
          <Route path="/">
            <Home />
          </Route>


        </Switch>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))
