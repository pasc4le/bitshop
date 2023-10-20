import React from 'react';

function CartPage(props) {
  const { prderPlaced, total, orderID, productName, productImg, productCat } = props.order;
  return (
    <table class="table table-bordered">
        <thead>
            <tr>
            <th>
                <p>Order Placed</p>
                <p>{prderPlaced}</p>
            </th>
            <th>
                <p>Total</p>
                <p>${total}</p>
            </th>
            <th className='text-end'>
                <p>Order ID: {orderID}</p>
            </th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>
                <img src={productImg} alt="Product"/>
            </td>
            <td>
                <a href="/details">{productName}</a><br/>
                <p><strong>{productCat}</strong></p>
            </td>
            <td className='text-end'>
                <button className='btn btn-warning'>Write a product review</button>
            </td>
            </tr>
        </tbody>
    </table>
    
  );
}

export default CartPage;
