import React from 'react';
import { HashRouter} from 'react-router-dom';
import Header from './componets/header/header';
import Main from './componets/Main/main'
import Footer from './componets/footer/footer';

import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div> 
    </HashRouter>
    
  );
}

export default App;
