import React from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<News key="Home" pageSize={5} country="in" category="Home " />} />
          <Route exact path="/business" element={<News key="Business" pageSize={5} country="in" category="Business" />} />
          <Route exact path="/Entertainment" element={<News key="Entertainment" pageSize={5} country="in" category="Entertainment" />} />
          <Route exact path="/general" element={<News key="General" pageSize={5} country="in" category="General" />} />
          <Route exact path="/Health" element={<News key="Health" pageSize={5} country="in" category="Health" />} />
          <Route exact path="/Science" element={<News  key="Science" pageSize={5} country="in" category="Science" />} />
          <Route exact path="/Sports" element={<News key="Sport" pageSize={5} country="in" category="Sports" />} />
          <Route exact path="/technology" element={<News key="Technology" pageSize={5} country="in" category="Technology" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
