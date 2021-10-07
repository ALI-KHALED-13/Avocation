import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import AvocadoHeader from './Components/AvocadoHeader';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import ContactPage from "./Components/ContactPage";
import SignUpPage from "./Components/SignUpPage";
import LogInPage from "./Components/LogInPage";



const App =()=>{
  const [logged, setLogged] = useState(false);
  return (
    <Router>
      <React.Fragment>
        <AvocadoHeader logged={logged} setLogged={setLogged}/> {/*users db section*/}
        <Switch>
          <Route exact path="/">
            <HomePage logged={logged} />
          </Route>
          <Route exact path="/sign-up">
            <SignUpPage />
          </Route>
          <Route exact path="/log-in">
            <LogInPage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
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