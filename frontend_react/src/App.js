import React from 'react';
import { About, Footer, Skills, Work, Education} from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <About />
    <Education/>
    <Work />
    <Skills />
    <Footer />
  </div>
);

export default App;