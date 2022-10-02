import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
  render() {
    let {productsData,setStateModal} = this.props;
    return (
      <div className='row'>
        {
            productsData.map((item, index) => {
                return <ProductItem item={item} key={index} setStateModal={setStateModal}/>
            })
        }
      </div>
    )
  }
}
