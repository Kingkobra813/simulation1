import React, { Component } from 'react';
import axios from 'axios';
import Product from '../Product/Product';

const BASE_URL = "http://localhost:3005"

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    deleteProduct = (id) => {
        const { getRequest } = this.props;

        axios.delete(BASE_URL + `/api/product/${id}`).then(resonse => {
            getRequest();
        })
    }

    render() {
        const { inventory } = this.props;
        const list = inventory.map((e, index) => {
            return (
                <Product
                    key={index}
                    id={e.id}
                    name={e.name}
                    price={e.price}
                    img={e.img}
                    deleted={this.deleteProduct}
                    edit={this.updateProduct}
                >
                    {e}
                </Product>
            );
        });

        return <div className="dashboard">{list}</div>;
    }
}
export default Dashboard;