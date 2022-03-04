import Navbar from './components/Navbar';
import TextForms from './components/TextForms'
import './App.css';
import AboutUs from './components/AboutUs';
import { useState,useEffect } from 'react';
import Alerts from './components/Alerts';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {


  const toggle = () =>
  {
    if (mode !== "dark")
    {
      setMode('dark');
      document.body.style.backgroundColor = "#07172a";
      setMsg('Dark mode has been enabled', "success");
      document.title = "textutils-dark mode";
      setTimeout(()=>{document.title = "textutils-Home"},2000)
    } 
    else
    {
      setMode('light');
      document.body.style.backgroundColor = "white";
      setMsg('Light mode has been enabled', "success")
      document.title = "textutils-light mode";
      setTimeout(()=>{document.title = "textutils-Home"},2000)
    }
  }
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light')

  const setMsg = (msg,type) =>
  {
    setAlert({ msg: msg, type: type })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
      <Router>
        <Navbar heading="BoB" about="About us" mode={mode}
           toggle={toggle} />
      <Alerts alert={alert}/>
      <div className="container">
      
        <Switch>
          <Route path="/AboutUs">
              <AboutUs mode={mode}/>
          </Route>
          <Route path="/">
          <TextForms heading="Enter the text below to play"  mode={mode} setMsg={setMsg}/>
          </Route>
        </Switch>

      </div>
      </Router>
    </>
  );
}

export default App;
