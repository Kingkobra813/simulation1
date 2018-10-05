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

    render() {
        return (
            <div>
                <input onChange={this.handleNameChange}></input>
                <input onChange={this.handlePriceChange}></input>
                <input onChange={this.handleImgChange}></input>
                <button onClick={this.handleCancelButton}>Cancel</button>
                <button>Add To Inventory</button>
            </div>
        )
    }

}
export default Form;