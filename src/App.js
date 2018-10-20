import React, { Component } from "react";
import axios from "axios";
import Dashboard from "./component/Dashboard/Dashboard";
import Form from "./component/Form/Form";
import Header from "./component/Header/Header";
import { Route } from "react-router-dom";
import "./App.css";

const BASE_URL = "http://localhost:3005";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: [],
      selectedId: {}
    };
  }

  componentDidMount = () => {
    this.getAllProducts();
  };

  getAllProducts = () => {
    axios.get(BASE_URL + "/api/inventory").then(response => {
      this.setState({ inventory: response.data });
    });
  };

  selectProduct = item => {
    this.setState({
      selectedId: item
    });
  };

  render() {
    const { inventory, selectedId } = this.state;
    return (
      <div className="App">
        <Header />

        <Route
          path="/"
          exact
          render={() => {
            return (
              <Dashboard
                inventory={inventory}
                getRequest={this.getAllProducts}
                selectProduct={this.selectProduct}
              />
            );
          }}
        />
        <Route
          path="/add"
          exact
          render={() => {
            return (
              <Form
                getRequest={this.componentDidMount}
                selectedId={selectedId}
              />
            );
          }}
        />
        <Route
          path="/edit/:id"
          exact
          render={() => {
            return (
              <Form
                getRequest={this.componentDidMount}
                selectedId={selectedId}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default App;
