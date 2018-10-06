import React, { Component } from 'react';
import axios from 'axios';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form'
import Header from './component/Header/Header';
import Product from './component/Product/Product';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: [],
    }
  }

  componentDidMount() {
    axios.get('./api/inventory').then(response => {
      this.setState({ inventory: response.data })
    })
  }

  render() {
    const { inventory, selectedId } = this.state;
    return (
      <div className="App">
        <Header />
        <Dashboard
          inventory={inventory}
          getRequest={this.componentDidMount}
        />
        <Product />
        <Form getRequest={this.componentDidMount} selectedId={selectedId} />
      </div>
    );
  }
}

export default App;
