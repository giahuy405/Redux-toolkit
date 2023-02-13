import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/reducers/shopReducer';
const ProductItem = (props) => {
  const dispatch = useDispatch()
  const { item } = props;
  return (
    <div className='border-2 shadow-xl p-4 rounded-xl'>
      <img src={item.image} alt="" />
      <h3>{item.name}</h3>
      <button
        onClick={() => {
          const cartItem = { ...item, quantity: 1 };
          dispatch(
            addToCart(cartItem)
          )
        }}
        type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Thêm vào giỏ hàng</button>
    </div>
  )
}

export default ProductItem