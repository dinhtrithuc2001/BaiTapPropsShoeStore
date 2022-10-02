import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    let {content} = this.props;
    return (
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" style={{ maxWidth: '70rem' }}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Chi tiết sản phẩm</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div className='row'>
                <div className='col-4'>
                  <img className='img-fluid' src={content.image} alt="" />
                </div>
                <div className='col-8'>
                  <table className='table'>
                    <thead>
                      <tr>
                        <th>Mã sản phẩm: </th>
                        <td>{content.id}</td>
                      </tr>
                      <tr>
                        <th>Tên sản phẩm: </th>
                        <td>{content.name}</td>
                      </tr>
                      <tr>
                        <th>Giá bán: </th>
                        <td>{content.price} $</td>
                      </tr>
                      <tr>
                        <th>Mô tả: </th>
                        <td>{content.description}</td>
                      </tr>
                      <tr>
                        <th>Số lượng: </th>
                        <td>{content.quantity}</td>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
