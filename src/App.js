import React, {useState, useEffect, Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import AvocadoHeader from './Components/AvocadoHeader';
import HomePage from './Components/HomePage';
//lazyLoaded next
const AboutPage = lazy(()=> import('./Components/AboutPage'));
const ContactPage = lazy(()=> import('./Components/ContactPage'));
const LogInPage = lazy(()=> import('./Components/LogInPage'));
const SignUpPage = lazy(()=> import('./Components/SignUpPage'));



const App =()=>{
  const prevUser = JSON.parse(localStorage.getItem('user')); // null if he isn't (JSON.parse(null) === null)
  let stillSaved;
  if (prevUser){
    stillSaved = new Date(localStorage.getItem('expiryDate')) > new Date() ;
  }
  const [user, setUser] = useState(stillSaved? prevUser: false ); //indicating a guest if false
  const [users, setUsers] = useState([]);

  useEffect(()=> { //checking if the server is running
    fetch('https://avocation.herokuapp.com/express_backend').then(resp=> resp.json())
    .then(data=> console.log(data.express)).catch(console.log);
  }, [])
  
  useEffect(()=>{
    
    fetch('https://avocation.herokuapp.com/users')
    .then(resp=> resp.json())
    .then(fetchedUsers=> {

      if (fetchedUsers.length > users.length) setUsers(fetchedUsers);

    })
    .catch(err=> console.log('error fetching users ', err))
    
  })  

  return (
    <Router basename="/Avocation">
      <React.Fragment>
        <AvocadoHeader user={user} setUser={setUser}/> 
        <Switch>
          <Route exact path="/">
            <HomePage user={user} />
          </Route>
          <Suspense fallback={<div>Loading....</div>}>
            <Route exact path="/sign-up">
              <SignUpPage users={users} setUsers={setUsers}/>
            </Route>
            <Route exact path="/log-in">
              <LogInPage users={users} setUser={setUser}/>
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
          </Suspense>
        </Switch>
      </React.Fragment>
    </Router>
  );
}


export default App;

