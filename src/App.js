// import logo from './logo.svg';
import './App.css';
import {
	BrowserRouter as Router,
	Route,
	// Link,
	Switch
} from 'react-router-dom';
import Explorer from './components/Explorer';
import Single from './components/Single';

// import {} from "@chakra-ui/react"

function App() {
  return (
    <Router>
     
      {/* <Explorer/>
      <Single/> */}

      <Switch>
        <Route exact path='/' component={Explorer}></Route>
        <Route  path='/single' component={Single}></Route>
      </Switch>
    </Router>
    
  );
}

export default App;
