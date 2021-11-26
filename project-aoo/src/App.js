
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Component/Header'
import Home from './Pages/Home'
import Checkout from './Pages/Checkout';
import Login from './Component/Login'; 
import { auth } from "./Firebase/firebase"
import { useStateValue } from './Pages/ContextApi/StateProvider';
import { useEffect } from 'react';
function App() { 
  const [{user},dispatch ] =useStateValue() ;

  useEffect(()=> {
        const unsubscribe =  auth.onAuthStateChanged((authUser) => {
            if(authUser) 
            {
              // the user is looged in
              dispatch({
                type:"SET_USER",
                user:authUser,
              })

            }else {
              // the user is logged out
              dispatch({
                type:"SET_USER",
                user:null,

              })

            }

          } );

          return () =>{
            // clean up operation 
            unsubscribe() ;
          }

  },[] ) ;
  console.log("user ==> " ,user) ;
  return (
    <Router>
      <div className="app">
        bismillah
        <Switch>
          <Route path="/checkout">
            <Header /> 
            <Checkout />
            <h1>Checkout</h1>

          </Route>
          <Route path="/login"> 
             <Login/>
         
           
          </Route>
          {/* this is default router */}
          <Route path="/">
            <Header />
            <Home />

          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
