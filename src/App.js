
import React, {useEffect,useState} from 'react';
import './App.css';

import Index from './components/Index.jsx';
import Landing from './components/Landing.jsx';

function App() {
  const [showHomepage, setShowHomepage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHomepage(true);
    }, 7000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='App'>
      {!showHomepage? <Landing/> : <Index bgcolor="black"/>}
    </div>
  );
}

export default App;
