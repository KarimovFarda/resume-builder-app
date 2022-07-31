import { useState } from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ResumeTemplate from './components/templates/resumeTemplate'
import ResumeForm from './components/form/resumeForm'
import LandingPage from './components/templatesLandingPage/landingPage';
function App() {
  const [formValue,setFormValue] = useState({})
  function getFormValue(value:any){
    setFormValue(value)
  }
  console.log(formValue)
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/template">
        <ResumeTemplate formValues={formValue} />

        </Route>
        <Route path="/landingpage">
        <LandingPage />
          </Route>
        <Route path="/">
          <ResumeForm getValue={getFormValue}/>
        </Route>
      </Switch>
        </Router>
    </div>
  );
}

export default App;
