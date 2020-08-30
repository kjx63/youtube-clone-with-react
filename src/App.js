import React from 'react';
import './App.css';
import Header from './Components/Header';
import RecommendedVideos from './Components/RecommendedVideos';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import SearchPage from './Components/SearchPage';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Switch>
          <Route path='/search/:searchTerm'>
            <div className='app__page'>
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path='/' exact>
            <div className='app__page'>
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
