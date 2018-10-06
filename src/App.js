import React, { Component } from 'react';
import axios from 'axios';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form'
import Header from './component/Header/Header';
import Product from './component/Product/Product';
import './App.css';

const BASE_URL = "http://localhost:3005"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: [],
      selectedId: {},
    }
  }

  componentDidMount = () => {
    axios.get(BASE_URL + '/api/inventory').then(response => {
      //console.log(response.data)
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
