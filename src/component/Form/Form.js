import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }
    }

    handleNameChange = e => {
        this.setState({ name: e.target.value })
    }

    handlePriceChange = e => {
        this.setState({ price: e.taget.value })
    }

    handleImgChange = e => {
        this.setState({ imgurl: e.target.value })
    }

    handleCancelButton = () => {
        this.setState({
            name: '',
            price: 0,
            imgurl: ''
        })
    }

    updateProduct(id, name, price, img) {
        const { getRequest } = this.props;
        console.log(id, name, price, img);
        axios
            .put(`/api/product/${id}`, { name, price, img })
            .then(res => {
                getRequest();
            })
    }


    render() {
        return (
            <div>
                <input onChange={this.handleNameChange}></input>
                <input onChange={this.handlePriceChange}></input>
                <input onChange={this.handleImgChange}></input>
                <button onClick={() => { this.handleCancelButton() }}>Cancel</button>
                <button onClick={() => { this.updateProduct(name, price, img) }}>Add To Inventory</button>
            </div>
        )
    }

}
export default Form;