import React, { Component } from 'react'
import Products from "./DataShoes.json";
import Modal from './Modal';
import ProductList from './ProductList';

export default class ShoesStore extends Component {
    state = {
        productDetail: {
            id: 1,
            name: "Adidas Prophere",
            alias: "adidas-prophere",
            price: 350,
            description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 995,
            image: "http://svcy3.myclass.vn/images/adidas-prophere.png"
        }
    }
    setStateModal = (product) => {
        this.setState({
            productDetail: product
        })
    }
    render() {
        let {productDetail} = this.state;
        return (
            <div className='container'>
                <h2 className='text-center mt-3'>Shoes Shop</h2>
                <ProductList productsData={Products} setStateModal={this.setStateModal} />
                <Modal content={productDetail}/>
            </div>
        )
    }
}
