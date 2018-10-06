import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "http://localhost:3005";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            price: 0,
            img: '',
            selectedId: null,
        }
    }

    handleNameChange = e => {
        this.setState({ name: e.target.value })
    }

    handlePriceChange = e => {
        this.setState({ price: e.target.value })
    }

    handleImgChange = e => {
        this.setState({ img: e.target.value })
    }

    handleCancelButton = () => {
        this.setState({
            name: '',
            price: 0,
            img: '',
            selectedId: null,
        })
    }

    makeNewProduct = (name, price, img) => {
        const { getRequest } = this.props;
        axios.post(BASE_URL + "/api/product", { name, price, img })
            .then(response => {
                getRequest();
                this.handleCancelButton();
            })
    }

    updateProduct = (id, name, price, img) => {
        const { getRequest } = this.props;
        axios.put(BASE_URL + '/api/product/:id', { name, price, img })
            .then(response => {
                getRequest();
            })
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.product !== this.props.product) {
            this.setState({
                name: this.props.name,
                price: this.props.price,
                img: this.props.img
            })
        }
    }


    render() {
        return (
            <div>
                <input onChange={this.handleNameChange} value={this.state.name} placeholder="name"></input>
                <input onChange={this.handlePriceChange} value={this.state.price} placeholder="price"></input>
                <input onChange={this.handleImgChange} value={this.state.img} placeholder="Img Url"></input>
                <button onClick={this.handleCancelButton}>Cancel</button>
                <button onClick={() => { this.makeNewProduct(this.state.name, this.state.price, this.state.img) }}>Add To Inventory</button>
            </div>
        )
    }

}
export default Form;