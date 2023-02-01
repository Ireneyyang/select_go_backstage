import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Member from './components/Member';
import Order from './components/Order';
import Product from './components/Product';
import Post from './components/Post';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          
          <Switch>
            <Route path="/Member" component={Member} exact />
            <Route path="/Order" component={Order} />
            <Route path="/Product" component={Product} />
            <Route Path='/Post' component={Post} />
          </Switch>

          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;