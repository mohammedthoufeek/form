// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './Component/Form.jsx';
import Output from './Component/Output/Output.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/output" element={<Output />} />
      </Routes>
    </Router>
  );
};

export default App;
