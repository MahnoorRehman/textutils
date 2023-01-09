import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter, Routes,
  Route,

} from 'react-router-dom';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-primary')


  }
  const toggleMode = (cls) => {
    removeBodyClasses()
    document.body.classList.add('bg-' + cls)
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#212529'
      showAlert('Dark Mode has been Enabled', 'success');
      document.title = 'TextUtils- Dark Mode'
      // document.body.style.color = 'white'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode has been Enabled', 'success');
      document.title = 'TextUtils- Light Mode'
    }

  }
  return (
    <>
      <BrowserRouter>
        <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* this class names are the class of BootsStrap */}
        <div className="container my-3" >

          <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} heading='TextUtils - Word Counter, Character Counter and Much More' mode={mode} />} />
            <Route path='/about' element={<About mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>






    </>
  );
}

export default App;
