import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Link, NavLink, Switch } from "react-router-dom"
import Home from "./components/Home"  
import Secret from "./components/Secret"

function App() {
  return (
    <BrowserRouter>
      <header className="bg-light pt-3">
        <div className="container">
          <h1 className="display-1">My React Login </h1>
          <ul className="nav nav-tabs">
            
            <li className="nav-item">
              <NavLink to="/secret" className="nav-link" activeClassName="active">
                Login
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
          
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>

       
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))
