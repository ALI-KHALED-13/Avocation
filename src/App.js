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

  useEffect(()=> {
    fetch('/express_backend').then(resp=> resp.json())
    .then(data=> console.log(data.express)).catch(console.log);
  }, [])
  
  useEffect(()=>{
    
    fetch('/users')
    .then(resp=> resp.json())
    .then(fetchedUsers=> {

      if (fetchedUsers.length > users.length) setUsers(fetchedUsers);

    })
    .catch(err=> console.log('error fetching users ', err))
    
  })  

  return (
    <Router>
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

/* 

*/
/*
const [data, setData] = useState('');

  useEffect(()=>{
    callServer()
    .then(result=> setData(result.express))
    .catch(console.error);
  }, [])

  const callServer = async()=>{
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  }
*/
/*
class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}*/