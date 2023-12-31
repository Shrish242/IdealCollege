import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes';



const App = () => {
  return (
    <Router>
      <Navbar/>
     <AnimatedRoutes/>
    </Router>
  );
};

export default App;
