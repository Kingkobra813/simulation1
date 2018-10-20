import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";

const BASE_URL = "http://localhost:3005";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      price: "",
      img: ""
    };
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      const { id } = this.props.match.params;
      axios.get(BASE_URL + "/api/product/" + id).then(response => {
        const { img, name, price } = response.data[0];
        this.setState({
          name,
          price,
          img
        })
      });
    }
  }



  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handlePriceChange = e => {
    this.setState({ price: e.target.value });
  };

  handleImgChange = e => {
    this.setState({ img: e.target.value });
  };

  handleCancelButton = () => {
    this.setState({
      name: "",
      price: 0,
      img: ""
    });
  };

  makeNewProduct = (name, price, img) => {
    const { getRequest } = this.props;
    axios
      .post(BASE_URL + "/api/product", { name, price, img })
      .then(response => {
        getRequest();
        this.handleCancelButton();
      });
  };

  updateProduct = (id, name, price, img) => {
    const { getRequest } = this.props;
    console.log({ id, name, price, img });
    axios
      .put(BASE_URL + `/api/product/${id}`, { name, price, img })
      .then(response => {
        getRequest();
      });
  };

  getOne(id) {
    axios.get(`/api/product/${this.props.id}`).then(res => {
      this.setState({
        name: res.data.name,
        price: res.data.price,
        img: res.data.img,
        id: this.props.location.state.id
      });
    });
  }

  render() {
    return (
      <div>
        <input
          onChange={this.handleNameChange}
          value={this.state.name}
          placeholder="name"
        />
        <input
          onChange={this.handlePriceChange}
          value={this.state.price}
          placeholder="price"
        />
        <input
          onChange={this.handleImgChange}
          value={this.state.img}
          placeholder="Img Url"
        />
        <button onClick={this.handleCancelButton}>Cancel</button>
        {this.props.match.url === "/add" ? (
          <button
            onClick={() => {
              this.makeNewProduct(
                this.state.name,
                this.state.price,
                this.state.img
              );
            }}
          >
            Add To Inventory
          </button>
        ) : (
            <button
              onClick={() => {
                this.updateProduct(
                  this.props.match.params.id,
                  this.state.name,
                  this.state.price,
                  this.state.img
                );
              }}
            >
              Save Changes
          </button>
          )}
      </div>
    );
  }
}
export default withRouter(Form);
