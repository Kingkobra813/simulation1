import React, { Component } from 'react';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form'
import Header from './component/Header/Header';
import Product from './component/Product/Product';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: {
        name: "shoes",
        price: 23,
        imgurl: "http://imgurl.com"
      }
    }
  }
  render() {

    return (
      <div className="App">
        <Header />
        <Dashboard
          value={this.state.inventory}
        />
        <Product />
        <Form />
      </div>
    );
  }
}

export default App;
