import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let { item,setStateModal } = this.props;
        return (
            <div className='col-4'>
                <div className="card mx-auto my-3" style={{width: '20rem'}}>
                    <img src={item.image} className="img-fluid"  alt={item.image} />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.price} $</p>
                        <button onClick={() => setStateModal(item)} data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-dark">Detail</button>
                    </div>
                </div>
            </div>
        )
    }
}
