import React from 'react';
import Orders from './component/orders/index';
import p1 from './images/products/p1.png';
import p2 from './images/products/p2.png';

const orders = [
    {
        prderPlaced: '14th August',
        total: '798',
        orderID: ' #O123-0012345',
        productImg: p1,
        productCat: 'Laptop'
    },
    {
        prderPlaced: '2nd Septembar',
        total: '798',
        orderID: ' #O123-0012345',
        productImg: p2,
        productCat: 'Laptop'
    }
];

function OrderPage() {
  return (
   
    <div className='container pt-3 pb-3'>
        <nav className='breadcrumb-wrap' aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">My Orders</li>
            </ol>
        </nav>
        <div className='row'>            
            <div className='col-12 card'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <h5>My Orders</h5>
                    </div>
                    <div className='col-12 col-md-6 text-end search-product'>
                        <div className="input-group mb-0">
                            <span className="input-group-text" id="basic-addon1"><i className="uil uil-search"></i></span>
                            <input type="text" className="form-control" placeholder="Search all your orders here" aria-label="" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                </div>
                <div className='order-wrap mt-4'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='table-responsive'>
                            {orders.map(order => {
                                return (
                                    <div>
                                        <Orders order={order} />
                                    </div>
                                );
                            })
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default OrderPage;
