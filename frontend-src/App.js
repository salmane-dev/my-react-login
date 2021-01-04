import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Link, NavLink, Switch } from "react-router-dom"
import Home from "./components/Home"  
import Login from "./components/Login"
import Logout from "./components/Logout"
//import { construct } from "core-js/fn/reflect"

function App(props) {
  
  let isAuth = localStorage.getItem("Token")
  let loginlink = '/login'
  
  const [login, setLogin] = useState(isAuth? 'Logout' : 'Login')
  
  if(isAuth && isAuth !== 'undefined') 
    loginlink = '/logout'


//Login handler
function handler(){
  setLogin('Logout') 
  loginlink = '/logout'
}

// logout handler
function logoutfn(){
  localStorage.removeItem('Token')
  setLogin("Login")
  loginlink = '/login'
}




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
                    <NavLink to={loginlink} className=" " activeClassName=" "> {login} </NavLink> 
            </li>
    
          </ul>
        </div>
      </header>

      <div className="container py-3 py-md-5">
        <Switch>
          
          <Route path="/logout">
            <Logout logoutfn={logoutfn} />
          </Route>

          <Route path="/login">
            <Login handler={handler} />
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
