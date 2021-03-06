import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/home';
import Blog from './components/blog';
import Editor from './components/editor';
import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/blog' component={Blog}/>
              <Route path='/blog/posts/new' component={Editor}/>
            </Switch>
          </Layout>
        </BrowserRouter>
    );
  }
}

export default App;
