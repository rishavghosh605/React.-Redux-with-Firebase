import React,{Component} from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './dashboard/Dashboard'
import ProjectDetails from './components/project/ProjectDetails'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import CreateProject from './components/project/CreateProject'

//Remember the very important keyword exact
class App extends Component {

  render(){
    return (
      <BrowserRouter>
      <div className="App">
          <Navbar/>
          <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/project/:id' component={ProjectDetails}/>
              <Route path='/signin' component={SignIn}/>
              <Route path='/signup' component={SignUp}/>
              <Route path='/create' component={CreateProject}/>
          </Switch>
     </div>
      </BrowserRouter>
    );
  }
}


export default App;
