import React from 'react';
import {
  BrowserRouter as Router,Route
} from 'react-router-dom';
//historyRouter 不带#  BrowserRouter 实现方式是通过后 h5 的 History api来实现的
import PageLayout from './page/Layout'
import 'antd/dist/antd.css'

function App () {
    return (
      <Router>
        <Route path="/" component={PageLayout} />
      </Router>
    );
}
 
export default App;
