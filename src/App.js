
import React, {useEffect,useState} from 'react';
import './App.css';
import { CSSTransition } from 'react-transition-group';

import Index from './components/Index.jsx';
import Landing from './components/Landing.jsx';

function App() {
  const [showHomepage, setShowHomepage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHomepage(true);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='App'>
      <CSSTransition
        in={!showHomepage}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <Landing />
      </CSSTransition>
      <CSSTransition
        in={showHomepage}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <Index bgcolor="black" />
      </CSSTransition>
    </div>
  );
}

export default App;
