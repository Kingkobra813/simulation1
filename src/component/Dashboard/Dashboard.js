import React, { Component } from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
    constructor(props) {
        super(props);
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
                    deleted={this.deleteStudent}
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