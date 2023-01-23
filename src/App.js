import './App.css';

//importing components
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About'
import Alert from './components/Alert'
import { useState } from 'react';

//npm react-router-dom
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

function App() {

  //state used for dark/light mode
  const [modes, setModes] = useState('light')             //we are using "state" in app.js. And this "state" is accessed by components.
  const [text, setText] = useState('Enable Dark mode')

  //state for alert
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({ 
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleModeFun = ()=>{
    if(modes === 'light'){
      setModes('dark')                                          //now modes = 'dark' because setModes has updated the state to 'dark'
      document.body.style.backgroundColor = "#222222"
      setText('Enable light mode')
      showAlert('Dark mode has been enabled', 'success')        //as you can see, the "alert" state of component <Alert> is changed by toggleModeFun() of component <navbar>    
      document.title = 'TextUtils - Dark mode'                  //changing title   
    }
    else{
      setModes('light')
      document.body.style.backgroundColor = "white"
      setText('Enable dark mode')
      showAlert('Light mode has been enabled', 'success')
      document.title = 'TextUtils - Light mode'
    }
  }



  return (                        //jsx is basically html code written inside return() of a function.
  //jsx can return only single tag but with the help of "<> </>" multiple tags can be enclosed inside it. In jsx, "class" is written as "className"
    <>    
      {/* whenever you are using "<Routes>" then it should always be wrapped inside a <Router> */}
      <Router>    
        {/*<navbar/> is a componenet*/}  
        <Navbar title = "TextUtils"                             //passing string as a value in props
          aboutText = "About Heading" 
          mode = {modes}                                       //here "modes"(which is a state) is passed to a component using props.
          text = {text}
          toggleMode = {toggleModeFun}                        //passing the function as a value in props
        />
        
        <Alert alert = {alert}/>                                


        <div className='container my-5'>
          <Routes>
            <Route exact path="/about"                                  //adding route path to component using npm react-router-dom
              element={<About mode = {modes}/>}
            />

            <Route exact path="/"                   //"exact" is used to match the exact route path otherwise the react will paritially match the route path
              element={<TextForm 
                formHeading = "Enter the text to analyze"
                mode = {modes}
                showAlert = {showAlert}
              />}   
            />
          </Routes>
        </div>
      </Router>
    </>                           
  );
}

export default App; 
